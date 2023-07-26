const {getHomePageTitle, getMobilePageTitle, sortByName} = require('../index.js')
const { driverSetup } = require('../../utils/Driver.js')

let result, driver = driverSetup('safari')


describe('verifying the functionalities given on Day1 with safari browser', ()=> {
    
    test('get the HomePage title using safari browser', async () => {
        result = await getHomePageTitle('Safari', 'Day1', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using safari browser', async () => {
        result = await getMobilePageTitle('Safari', 'Day1', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('sort the mobiles by ascending order using safari browser', async () => {
        result = await sortByName('Safari', driver)
        expect(result).toBe(true)
    }, 100000)


})
