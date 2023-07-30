const { driverSetup, getHomePageTitle, login, reorder, shippingInformation, orderPlace } = require('../index')

let result, driver = driverSetup('firefox')

describe('Verifying the functionalities given on day 7', () => {

    test('get the home page title using Firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day7', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Firefox Browser', async () => {
        result = await login('Firefox', 'Day7', driver, 'prithvivarma2@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('reorder the same element using Firefox Browser', async () => {
        result = await reorder('Firefox', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('entering the billing information using Firefox Browser', async () => {
        result = await shippingInformation('Firefox', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('place the order using Firefox Browser', async () => {
        result = await orderPlace('Firefox', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)   


})