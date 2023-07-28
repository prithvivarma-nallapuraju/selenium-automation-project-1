const { driverSetup, getHomePageTitle, clickOnMyAccount, accountCreation } = require('../index')

let result, driver = driverSetup('firefox')

describe('verifying the functionalities given on day 5', () => {
    
    test('get the home page title using Firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day5', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('go to my account home page using Firefox browser', async () => {
        result = await clickOnMyAccount('Firefox', 'Day5', driver)
        expect(result).toBe("Customer Login")
    }, 100000)

    test('register the account using Firefox browser', async () => {
        result = await accountCreation('Firefox', 'Day5', driver, 'prithvivarma2@gmail.com')
        expect(result).toBe(true)
    }, 100000)


})
