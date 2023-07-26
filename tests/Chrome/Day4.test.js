const {driverSetup, getHomePageTitle, getMobilePageTitle} = require('../index.js')

let result, driver = driverSetup('chrome')


describe('verifying the functionalities given on Day 4 with Chrome browser', ()=> {
    
    test('get the HomePage title using Chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day4', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Chrome browser', async () => {
        result = await getMobilePageTitle('Chrome', 'Day4', driver)
        expect(result).toBe('Mobile')
    }, 100000)


})