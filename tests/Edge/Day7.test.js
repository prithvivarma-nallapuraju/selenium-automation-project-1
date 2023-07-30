const { driverSetup, getHomePageTitle, login, reorder, shippingInformation, orderPlace } = require('../index')

let result, driver = driverSetup('edge')

describe('Verifying the functionalities given on day 7', () => {

    test('get the home page title using Edge browser', async () => {
        result = await getHomePageTitle('Edge', 'Day7', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Edge Browser', async () => {
        result = await login('Edge', 'Day7', driver, 'prithvivarma3@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('reorder the same element using Edge Browser', async () => {
        result = await reorder('Edge', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('entering the billing information using Edge Browser', async () => {
        result = await shippingInformation('Edge', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('place the order using Edge Browser', async () => {
        result = await orderPlace('Edge', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)   


})