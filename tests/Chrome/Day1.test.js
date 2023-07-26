const {driverSetup, getHomePageTitle, getMobilePageTitle, sortByName} = require('../index.js')


let result, driver = driverSetup('chrome')


describe('verifying the functionalities given on Day1 with chrome browser', ()=> {
    
    test('get the HomePage title using chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day1', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using chrome browser', async () => {
        result = await getMobilePageTitle('Chrome', 'Day1', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('sort the mobiles by ascending order using chrome browser', async () => {
        result = await sortByName('Chrome', driver)
        expect(result).toBe(true)
    }, 100000)


})
