const { driverSetup, getHomePageTitle, login, goToTV, checkout } = require('../index')

let result, driver = driverSetup('edge')

describe('Verifying the functionalities given on day 6', () => {

    test('get the home page title using Edge browser', async () => {
        result = await getHomePageTitle('Edge', 'Day6', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Edge Browser', async () => {
        result = await login('Edge', 'Day6', driver, 'prithvivarma3@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('add tv to wishlist using Edge Browser', async () => {
        result = await goToTV('Edge', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('checkout the wishlist using Edge Browser', async () => {
        result = await checkout('Edge', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

})