const { driverSetup, getHomePageTitle, clickOnMyAccount, createAccount } = require('../index')

let result, driver = driverSetup('edge')

describe('verifying the functionalities given on day 5', () => {
    
    test('get the home page title using Edge browser', async () => {
        result = await getHomePageTitle('Edge', 'Day5', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('go to my account home page using Edge browser', async () => {
        result = await clickOnMyAccount('Edge', 'Day5', driver)
        expect(result).toBe("Customer Login")
    }, 100000)

    test('register the account using Edge browser', async () => {
        result = await createAccount('Edge', 'Day5', driver, 'prithvivarma3@gmail.com')
        expect(result).toBe(true)
    }, 100000)


})
