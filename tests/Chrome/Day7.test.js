const { driverSetup, getHomePageTitle, login, reorder, shippingInformation, orderPlace } = require('../index')

let result, driver = driverSetup('chrome')

describe('Verifying the functionalities given on day 7', () => {

    test('get the home page title using chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day7', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Chrome Browser', async () => {
        result = await login('Chrome', 'Day7', driver, 'prithvivarma4@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('reorder the same element using Chrome Browser', async () => {
        result = await reorder('Chrome', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('entering the billing information using Chrome Browser', async () => {
        result = await shippingInformation('Chrome', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('place the order using Chrome Browser', async () => {
        result = await orderPlace('Chrome', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)   


})