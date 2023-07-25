const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
const sortByNamePath = '../../Scripts/Day1/SortByName'
const {driverSetup} = require('../index.js')

let script, result, driver = driverSetup('edge')


describe('verifying the functionalities given on Day1 with edge browser', ()=> {
    test('get the HomePage title using Edge browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('Edge', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobilePage title using Edge browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('Edge', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)

})