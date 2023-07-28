const { driverSetup } = require('../../utils/Driver')
const { getHomePageTitle, clickOnMyAccount, accountCreation, login, goToTV, shareWishlist } = require('../index')

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

    test('register the account using Safari browser', async () => {
        result = await accountCreation('Safari', 'Day5', driver, 'prithvivarma1@gmail.com')
        expect(result).toBe(true)
    }, 100000)

    test('login into your account using Safari Browser', async () => {
        result = await login('Safari', 'Day5', driver, 'prithvivarma1@gmail.com')
        expect(result).toBe('My Account')
    }, 100000)

    test('add tv to wishlist using Safari Browser', async () => {
        result = await goToTV('Safari', 'Day5', driver)
        expect(result).toBe(true)
    }, 100000)

    test('share wishlist to an email id using Safari browser', async () => {
        result = await shareWishlist('Safari', 'Day5', driver , 'prithvivarma1@gmail.com')
        expect(result).toBe(true)
    }, 100000)
    
})
