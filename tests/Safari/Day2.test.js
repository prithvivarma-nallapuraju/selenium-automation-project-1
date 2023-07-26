const { getHomePageTitle, getMobilePageTitle, getCostOfSony, getPriceOnSonyPage, clickOnSony} = require('../index.js')
const { driverSetup } = require('../../utils/Driver')


let result, driver = driverSetup('safari')


describe('Verifying the functionalities given on day 2 using Safari browser', ()=>{

    test('get the home page title using Safari browser', async () => {
        result = await getHomePageTitle('Safari', 'Day2', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobile page title using Safari browser', async () => {
        result = await getMobilePageTitle('Safari', 'Day2', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('get the cost of sony mobile using Safari browser', async () => {
        result = await getCostOfSony(driver)
        expect(result).toBe("$100.00")
    }, 100000)


    test('go to sony home page using Safari browser', async () => {
        result = await clickOnSony('Safari', 'Day2', driver)
        expect(result).toBe("Sony Xperia - Mobile")
    }, 100000)


    test('get the price of sony on its page using Safari browser', async ()=> {
        result = await getPriceOnSonyPage(driver)
        expect(result).toBe("$100.00")
    }, 100000)


})