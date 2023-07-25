const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
const getCostOfSonyPath = '../../Scripts/Day2/GetCostOfSony'
const clickOnSonyPath = '../../Scripts/Day2/ClickOnSony'
const getPriceOnSonyPagePath = '../../Scripts/Day2/GetPriceOnSonyPage'
const {driverSetup} = require('../index.js')


let script, result, driver = driverSetup('firefox')

describe('Verifying the functionalities given on day 2 using firefox browser', ()=>{

    test('get the home page title using firefox browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('Firefox', 'Day2', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobile page title using firefox browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('Firefox', 'Day2', driver)
        expect(result).toBe('Mobile')
    }, 100000)

    test('get the cost of sony mobile using Firefox browser', async () => {
        script = require(getCostOfSonyPath)
        result = await script.getCostOfSony(driver)
        expect(result).toBe("$100.00")
    }, 100000)

    test('go to sony home page using Firefox browser', async () => {
        script = require(clickOnSonyPath)
        result = await script.clickOnSony('Firefox', 'Day2', driver)
        expect(result).toBe("Sony Xperia - Mobile")
    }, 100000)

    test('get the price of sony on its page using Firefox browser', async ()=> {
        script = require(getPriceOnSonyPagePath)
        result = await script.getPriceOnSonyPage(driver)
        expect(result).toBe("$100.00")
    }, 100000)

})