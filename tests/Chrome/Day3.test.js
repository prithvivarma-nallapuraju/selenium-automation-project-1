const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
//const { driverSetup } = require('../../utils/Driver')
const { driverSetup } = require('../../utils/DriverHeadless')
const sortByNamePath = '../../Scripts/Day1/SortByName'

let script, result, driver = driverSetup('chrome')


describe('verifying the functionalities given on Day1 with chrome browser', ()=> {
    test('get the HomePage title using chrome browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('Chrome', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobilePage title using chrome browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('Chrome', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)

})