const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
const { driverSetup } = require('../../utils/Driver')
const sortByNamePath = '../../Scripts/Day1/SortByName'

let script, result, driver = driverSetup('safari')


describe('verifying the functionalities given on Day1 with safari browser', ()=> {
    test('get the HomePage title using safari browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('Safari', 'Day1', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobilePage title using safari browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('Safari', 'Day1', driver)
        expect(result).toBe('Mobile')
    }, 100000)

    test('sort the mobiles by ascending order using safari browser', async () => {
        script = require(sortByNamePath)
        result = await script.sortByName('Safari', driver)
        expect(result).toBe(true)
    }, 100000)
})