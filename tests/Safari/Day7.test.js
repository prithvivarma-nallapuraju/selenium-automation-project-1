const { driverSetup } = require('../../utils/Driver')
const { getHomePageTitle, login, reorder, shippingInformation, orderPlace } = require('../index')

let result, driver = driverSetup('safari')

describe('Verifying the functionalities given on day 7', () => {

    test('get the home page title using Safari browser', async () => {
        result = await getHomePageTitle('Safari', 'Day7', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('login into your account using Safari Browser', async () => {
        result = await login('Safari', 'Day7', driver, 'prithvivarma1@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('reorder the same element using Safari Browser', async () => {
        result = await reorder('Safari', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('entering the billing information using Safari Browser', async () => {
        result = await shippingInformation('Safari', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)

    test('place the order using Safari Browser', async () => {
        result = await orderPlace('Safari', 'Day7', driver)
        expect(result).toBe(true)
    }, 100000)   


})