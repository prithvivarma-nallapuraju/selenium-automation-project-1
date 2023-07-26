const { driverSetup } = require('../../utils/Driver')
const {getHomePageTitle, getMobilePageTitle} = require('../index.js')

let result, driver = driverSetup('safari')


describe('verifying the functionalities given on Day 4 with Safari browser', ()=> {
    
    test('get the HomePage title using Safari browser', async () => {
        result = await getHomePageTitle('Safari', 'Day4', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Safari browser', async () => {
        result = await getMobilePageTitle('Safari', 'Day4', driver)
        expect(result).toBe('Mobile')
    }, 100000)


})