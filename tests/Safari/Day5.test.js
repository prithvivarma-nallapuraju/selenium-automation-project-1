const { driverSetup } = require('../../utils/Driver')
const { getHomePageTitle, clickOnMyAccount } = require('../index')

let result, driver = driverSetup('safari')

describe('verifying the functionalities given on day 5', () => {
    
    test('get the home page title using Safari browser', async () => {
        result = await getHomePageTitle('Safari', 'Day5', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('go to my account home page using Safari browser', async () => {
        result = await clickOnMyAccount('Safari', 'Day5', driver)
        expect(result).toBe("Customer Login")
    }, 100000)


})
