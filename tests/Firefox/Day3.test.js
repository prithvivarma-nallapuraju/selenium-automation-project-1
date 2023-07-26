const {driverSetup, getHomePageTitle, getMobilePageTitle} = require('../index.js')

let result, driver = driverSetup('firefox')


describe('verifying the functionalities given on Day1 with Firefox browser', ()=> {
    test('get the HomePage title using Firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)

    test('get the mobilePage title using Firefox browser', async () => {
        result = await getMobilePageTitle('Firefox', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)

})