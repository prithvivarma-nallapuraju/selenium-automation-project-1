const {driverSetup, getHomePageTitle, getMobilePageTitle, sortByName} = require('../index.js')

let result, driver = driverSetup('edge')


describe('verifying the functionalities given on Day1 with edge browser', ()=> {
    
    test('get the HomePage title using edge browser', async () => {
        result = await getHomePageTitle('Edge', 'Day1', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using edge browser', async () => {
        result = await getMobilePageTitle('Edge', 'Day1', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('sort the mobiles by ascending order using edge browser', async () => {
        result = await sortByName('Edge', driver)
        expect(result).toBe(true)
    }, 100000)

    
})
