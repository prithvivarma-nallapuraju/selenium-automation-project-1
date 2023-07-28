const { driverSetup, getHomePageTitle, clickOnMyAccount, accountCreation, login } = require('../index')

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

    
    test('login into your account using Chrome Browser', async () => {
        result = await login('Chrome', 'Day5', driver, 'prithvivarma4@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

})
