const {driverSetup, getHomePageTitle, getMobilePageTitle, sortByName} = require('../index.js')


let result,  driver = driverSetup('firefox')


describe('verifying the functionalities given on Day 1 with firefox browser', ()=> {

    test('get the HomePage title using firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day1', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using firefox browser', async () => {
        result = await getMobilePageTitle('Firefox', 'Day1', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('sort the mobiles by ascending order using firefox browser', async () => {
        result = await sortByName('Firefox', driver)
        expect(result).toBe(true)
    }, 100000)
   
    
})
