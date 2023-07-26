const {driverSetup, getHomePageTitle, getMobilePageTitle, getCostOfSony, getPriceOnSonyPage, clickOnSony} = require('../index.js')


let result, driver = driverSetup('chrome')


describe('Verifying the functionalities given on day 2 using Chrome browser', ()=>{

    test('get the home page title using Chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day2', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobile page title using Chrome browser', async () => {
        result = await getMobilePageTitle('Chrome', 'Day2', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('get the cost of sony mobile using chrome browser', async () => {
        result = await getCostOfSony(driver)
        expect(result).toBe("$100.00")
    }, 100000)


    test('go to sony home page using chome browser', async () => {
        result = await clickOnSony('Chrome', 'Day2', driver)
        expect(result).toBe("Sony Xperia - Mobile")
    }, 100000)


    test('get the price of sony on its page using chrome browser', async ()=> {
        result = await getPriceOnSonyPage(driver)
        expect(result).toBe("$100.00")
    }, 100000)


})