const puppeteer = require('puppeteer')
const sessionFactory = require('../factories/sessionFactory')
const userFactory = require('../factories/userFactory')

class CustomPage {
    static async build() {
        //create the new instance of custom page
        const browser = await puppeteer.launch({
            headless: false
        })

        const page = await browser.newPage()
        const customPage = new CustomPage(page, browser)

        //create a proxy and return it
        return new Proxy(customPage, {
            get: function (target, property) {
                //refactor the order we bring the objects
                //return customPage[property] || page[property] || browser[property]

                //use puppeteer method
                return customPage[property] || browser[property] || page[property]
            }
        })
    }

    constructor(page) {
        this.page = page
        this.browser = browser
    }

    async login() {
        const user = await userFactory()
        const { session, sign } = sessionFactory(user)

        await this.page.setCookie({ name: 'session', value: session })
        await this.page.setCookie({ name: 'session.sig', value: sign })
        await this.page.goto('http://localhost:4659/blogs')
        //if the test is not work, the test broke here. Add a tiny paused to leave react app instance.
        await this.page.waitFor('a[href="/auth/logout"]')
    }

    async getContentsOf(selector) {
        return this.page.$eval(selector, el => el.innerHTML)
    }

    // represent get Request
    get(path) {
        return this.page.evaluate(() => {
            // closure scoped path
            return fetch(path, {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Comtent-Type': 'application/json'
                },
                body: json.stringify({ title: 'My Title', content: 'My Content' })

            }).then(res => res.json())
            // second argument to pass to page Function
        }, path)
    }
    // Represent post request
    post(path, data) {// receives a functio
        return page.evaluate((_path, _data) => {
            return fetch(_path, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Comtent-Type': 'application/json'
                },
                body: json.stringify(_data)
            }).then(res => res.json())
        }, path, data)
    }
    //array of objects
    execRequests(actions) {
        //this is an array of promises combined into a single Promise
        return Promise.all(
            actions.map(({ method, path, data }) => {
                //reference to the object we are working this get or post method
                return this[method](path, data) //property arguments
            })
        )
    }
}

// browser option ---> close() {
//     this.browser.close()
// }

module.exports = CustomPage