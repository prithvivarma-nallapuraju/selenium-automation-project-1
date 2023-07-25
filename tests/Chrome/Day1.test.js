const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
//const { driverSetup } = require('../../utils/Driver')
const { driverSetup } = require('../../utils/DriverHeadless')
const sortByNamePath = '../../Scripts/Day1/SortByName'

let script, result, driver = driverSetup('chrome')


describe('verifying the functionalities given on Day1 with chrome browser', ()=> {
    test('get the HomePage title using chrome browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('Chrome', 'Day1', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobilePage title using chrome browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('Chrome', 'Day1', driver)
        expect(result).toBe('Mobile')
    }, 100000)

    test('sort the mobiles by ascending order using chrome browser', async () => {
        script = require(sortByNamePath)
        result = await script.sortByName('Chrome', driver)
        expect(result).toBe(true)
    }, 100000)
})
