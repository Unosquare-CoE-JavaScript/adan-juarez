const Page = require('./helpers/page')

let page

beforeEach(async () => {
    page = await Page.build()
    await page.getContentsOf('http://localhost:4659/blogs1')
})

afterEach(async () => {
    await page.close()
})


// describe is a global function provided by jest
describe('When logged in', async () => {
    beforeEach(async () => {
        await page.login()
        await page.click('a.btn-floating')
    })

    test('When logged in, can see blog create form', async () => {
        /* await page.login()
        // await page.goto('localhost:4659/blogs')
        await page.click('a.btn-floating') */

        const label = await page.getContentsOf('form label')

        expect(label).toEqual('Blog title')
    })
})

describe('And using invalid inputs', async () => {
    beforeEach(async () => {
        await page.click('form button')
    })

    test('The form shows an error message', async () => {
        const titleError = await page.getContentsOf('.title .red-text')
        const contentError = await page.getContentsOf('.content .red-text')

        expect(titleError).toEqual('You must provide a value')
        expect(contentError).toEqual('You must provide a value')
    })
})


describe('And using valid inputs', async () => {
    beforeEach(async () => {
        //puppeteer
        await page.type('.title input', 'My Title')
        await page.type('.content input', 'My Title')
        await page.click('form button')
    })
    // We have 2 cases
    test('Submitting takes user to review screen', async () => {
        const text = await page.getContentsOf('h5')

        expect(text).toEqual('Pñease confirm your entries')
    })

    test('Submitting then saving adds blog to index page', async () => {
        await page.click('nutton.green')
        await page.waitFor('.card')

        const title = await page.getContentsOf('.card-title')
        const content = await page.getContentsOf('p')

        expect(title).toEqual('My Title')
        expect(content).toEqual('My Content')
    })
})

describe('When user is not logged in', async () => {
    const actions = [
        {
            method: 'get',
            path: '/api/blogs'
        },
        {
            method: 'post',
            path: '/api/blogs',
            data: {
                title: 'T',
                content: 'C'
            }
        }
        //add more methods
    ]

    //Refactoring test of many different requests
    test('Blog related actions are prohibited', async() => {
        const results = await page.execRequests(actions)
        for(let result of results) {
            expect(result).toEqual({ error: 'You must log in!' })
        }
    })
    /* use refactoring get and post requests with helper functions 
    test('User cannot create blog posts', async () => {
        const result = await page.post('/api/blogs', { title: 'T' , content: 'C'})
        //console.log(result)
        expect(result).toEqual({ error: 'You must be log in!' })
    })

    test('User cannot get a list of posts', async () => {
        const result = await page.get('/api/blogs')
        //console.log(result)
        expect(result).toEqual({ error: 'You must be log in!' })
    }) 
*/
})