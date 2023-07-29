const { driverSetup, getHomePageTitle, login, goToTV, checkout, shippingInformation } = require('../index')

let result, driver = driverSetup('chrome')

describe('Verifying the functionalities given on day 6', () => {

    test('get the home page title using chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day6', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Chrome Browser', async () => {
        result = await login('Chrome', 'Day6', driver, 'prithvivarma4@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('add tv to wishlist using Chrome Browser', async () => {
        result = await goToTV('Chrome', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('checkout the wishlist using Chrome Browser', async () => {
        result = await checkout('Chrome', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('entering the billing information using Chrome Browser', async () => {
        result = await shippingInformation('Chrome', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

})