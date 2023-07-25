const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
const { driverSetup } = require('../../utils/Driver')
const sortByNamePath = '../../Scripts/Day1/SortByName'

let script, result, driver = driverSetup('safari')


describe('verifying the functionalities given on Day1 with Safari browser', ()=> {
    test('get the HomePage title using Safari browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('Safari', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobilePage title using Safari browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('Safari', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)

})