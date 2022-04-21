const puppeteer = require('puppeteer')

const Page = require('./helpers/page')

let  page;

//Execute it before every test runs
// DRY the puppeteer chromium instance and with beforeEach
beforeEach(async () => {
    //represents the running browser window, write this 2 lines for every test we are writing
     /* browser = await puppeteer.launch({ sUBSTITUTE For the factory Page
        // the browser the browser open with not graphical interface
        headless: false
    }) */
    //page = await browser.newPage()

    //The proxy page and browser
    page = await Page.build()
    // get the app port launch
    await page.goto('localhost:4659')
})
//Execute it after every test runs

afterEach(async () => {
    //await browser.close()
    await page.close()
})

test('Adds two numbers', () => {
    //testing logic
    const sum = 1 + 2

    // expected result
    expect(sum).toEqual(3)
})

test('The header has the correct text', async () => {
    /* //represents the running browser window, write this 2 lines for every test we are writing
    const browser = await puppeteer.launch({
        // the browser the browser open with not graphical interface
        headless: false
    }) 
    const page = await browser.newPage()

    // get the app port launch
    await page.goto('localhost:4659')
*/
    // dom selector to retrieve a title // Refactor
   // const text = await page.$eval('a.brand-logo', el => el.innerHTML)

    // refactor
    const text = await page.getContentsOf('a.brand-logo')
    
    expect(text).toEqual('Blogster')
})

test('clicking login starts oauth flow', async () => {
    await page.click('.right a')

    //using of jest for check url

    const url = await page.url()
    expect(url).toMatch(/accounts\.google\.com/) 
})

test.only('When signed in, shows logout button', async() => {
    //const id = '5a85dc351cd843163727f63c'
    //const user = await userFactory()
    //const { session, sign } = sessionFactory(user)
    // const Buffer = require('safe-buffer').Buffer
    // const sessionObject = {
    //     passport: {
    //         user: id
    //     }
    // }

    // const sessionString = Buffer.from(JSON.stringufy(sessionObject))
    //     .toString('base64')
    
    // //generate the session signature
    // const Keygrip = require('keygrip')
    // const keys = require('../config/keys')
    // const keygrip = new Keygrip([keys.cookieKey])
    //                             //You can only pass the sessionString
    // const sign = keygrip.sign('session=' + sessionString)

    //console.log(sessionString, sign)    
    //puppeteer manage cookies
    /* await page.setCookie({ name: 'session', value: session })
    await page.setCookie({ name: 'session.sig', value: sign })
    await page.goto('localhost:4659')
    //if the test is not work, the test broke here. Add a tiny paused to leave react app instance.
    await page.waitFor('a[href="/auth/logout"]') */
    
    // Refactor eith Page Proxy
    await page.login()

    const text = await page.$eval('a[href="/auth/logout"]', (el) => el.innerHTML)

    expect(text).toEqual('Logout')
})