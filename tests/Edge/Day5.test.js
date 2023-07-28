const { driverSetup, getHomePageTitle, clickOnMyAccount, accountCreation, login, goToTV, shareWishlist } = require('../index')

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
        result = await accountCreation('Edge', 'Day5', driver, 'prithvivarma3@gmail.com')
        expect(result).toBe(true)
    }, 100000)

    test('login into your account using Edge Browser', async () => {
        result = await login('Edge', 'Day5', driver, 'prithvivarma3@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('add tv to wishlist using Edge Browser', async () => {
        result = await goToTV('Edge', 'Day5', driver)
        expect(result).toBe(true)
    }, 100000)

    test('share wishlist to an email id using Edge browser', async () => {
        result = await shareWishlist('Edge', 'Day5', driver , 'prithvivarma3@gmail.com')
        expect(result).toBe(true)
    }, 100000)


})
