const {driverSetup, getHomePageTitle, getMobilePageTitle, getCostOfSony, getPriceOnSonyPage, clickOnSony} = require('../index.js')


let result, driver = driverSetup('firefox')


describe('Verifying the functionalities given on day 2 using firefox browser', ()=>{

    test('get the home page title using firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day2', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobile page title using firefox browser', async () => {
        result = await getMobilePageTitle('Firefox', 'Day2', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('get the cost of sony mobile using Firefox browser', async () => {
        result = await getCostOfSony(driver)
        expect(result).toBe("$100.00")
    }, 100000)


    test('go to sony home page using Firefox browser', async () => {
        result = await clickOnSony('Firefox', 'Day2', driver)
        expect(result).toBe("Sony Xperia - Mobile")
    }, 100000)


    test('get the price of sony on its page using Firefox browser', async ()=> {
        result = await getPriceOnSonyPage(driver)
        expect(result).toBe("$100.00")
    }, 100000)


})