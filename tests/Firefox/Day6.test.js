const { driverSetup, getHomePageTitle, login, goToTV, checkout, shippingInformation, orderPlace } = require('../index')

let result, driver = driverSetup('firefox')

describe('Verifying the functionalities given on day 6', () => {

    test('get the home page title using Firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day6', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Firefox Browser', async () => {
        result = await login('Firefox', 'Day6', driver, 'prithvivarma2@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('add tv to wishlist using Firefox Browser', async () => {
        result = await goToTV('Firefox', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('checkout the wishlist using Firefox Browser', async () => {
        result = await checkout('Firefox', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('entering the billing information using Firefox Browser', async () => {
        result = await shippingInformation('Firefox', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('place the order using Firefox Browser', async () => {
        result = await orderPlace('Firefox', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)    

})