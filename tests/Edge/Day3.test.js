const {driverSetup, getHomePageTitle, getMobilePageTitle} = require('../index.js')


let result, driver = driverSetup('edge')


describe('verifying the functionalities given on Day1 with edge browser', ()=> {

    test('get the HomePage title using Edge browser', async () => {
        result = await getHomePageTitle('Edge', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Edge browser', async () => {
        result = await getMobilePageTitle('Edge', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)


})