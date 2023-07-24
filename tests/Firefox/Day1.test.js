const getHomePageTitlePath = '../../Scripts/Day1/GetHomePageTitle'
const getMobilePageTitlePath = '../../Scripts/Day1/GetMobilePageTitle'
const { driverSetup } = require('../../utils/Driver')

let script, result,  driver = driverSetup('firefox')

describe('verifying the functionalities given on Day1 with firefox browser', ()=> {
    test('get the HomePage title using firefox browser', async () => {
        script = require(getHomePageTitlePath)
        result = await script.getHomePageTitle('firefox', driver)
        expect(result).toBe('Home page')
    }, 50000)

    test('get the mobilePage title using firefox browser', async () => {
        script = require(getMobilePageTitlePath)
        result = await script.getMobilePageTitle('firefox', driver)
        expect(result).toBe('Mobile')
    }, 50000)
})
