const { driverSetup, getHomePageTitle, clickOnMyAccount, accountCreation } = require('../index')

let result, driver = driverSetup('chrome')

describe('verifying the functionalities given on day 5', () => {
    
    test('get the home page title using chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day5', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('go to my account home page using chrome browser', async () => {
        result = await clickOnMyAccount('Chrome', 'Day5', driver)
        expect(result).toBe("Customer Login")
    }, 100000)

    test('register the account using Chrome browser', async () => {
        result = await accountCreation('Chrome', 'Day5', driver, 'prithvivarma4@gmail.com')
        expect(result).toBe(true)
    }, 100000)


})
