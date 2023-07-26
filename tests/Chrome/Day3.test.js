const {driverSetup, getHomePageTitle, getMobilePageTitle} = require('../index.js')

let result, driver = driverSetup('chrome')


describe('verifying the functionalities given on Day1 with chrome browser', ()=> {
    
    test('get the HomePage title using chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using chrome browser', async () => {
        result = await getMobilePageTitle('Chrome', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)


})