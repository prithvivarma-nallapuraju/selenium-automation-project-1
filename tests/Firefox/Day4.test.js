const {driverSetup, getHomePageTitle, getMobilePageTitle} = require('../index.js')

let result, driver = driverSetup('firefox')


describe('verifying the functionalities given on Day 4 with Firefox browser', ()=> {
    
    test('get the HomePage title using Firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day4', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Firefox browser', async () => {
        result = await getMobilePageTitle('Firefox', 'Day4', driver)
        expect(result).toBe('Mobile')
    }, 100000)


})