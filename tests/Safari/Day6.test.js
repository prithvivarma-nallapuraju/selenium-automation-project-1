const { getHomePageTitle, login, goToTV, checkout, shippingInformation } = require('../index')
const { driverSetup } = require('../../utils/Driver')

let result, driver = driverSetup('safari')

describe('Verifying the functionalities given on day 6', () => {

    test('get the home page title using Safari browser', async () => {
        result = await getHomePageTitle('Safari', 'Day6', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Safari Browser', async () => {
        result = await login('Safari', 'Day6', driver, 'prithvivarma1@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('add tv to wishlist using Safari Browser', async () => {
        result = await goToTV('Safari', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('checkout the wishlist using Safari Browser', async () => {
        result = await checkout('Safari', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

    test('entering the billing information using Safari Browser', async () => {
        result = await shippingInformation('Safari', 'Day6', driver)
        expect(result).toBe(true)
    }, 100000)

})