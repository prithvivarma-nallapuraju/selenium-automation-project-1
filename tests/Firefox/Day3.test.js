const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
//const { driverSetup } = require('../../utils/Driver')
const { driverSetup } = require('../../utils/DriverHeadless')
const sortByNamePath = '../../Scripts/Day1/SortByName'

let script, result, driver = driverSetup('firefox')


describe('verifying the functionalities given on Day1 with Firefox browser', ()=> {
    test('get the HomePage title using Firefox browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('Firefox', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobilePage title using Firefox browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('Firefox', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)

})