const {driverSetup, getHomePageTitle, getMobilePageTitle, clickCompare, comparePhones} = require('../index.js')

let result, driver = driverSetup('edge')


describe('verifying the functionalities given on Day 4 with Edge browser', ()=> {
    
    test('get the HomePage title using Edge browser', async () => {
        result = await getHomePageTitle('Edge', 'Day4', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Edge browser', async () => {
        result = await getMobilePageTitle('Edge', 'Day4', driver)
        expect(result).toBe('Mobile')
    }, 100000)

    test('click on add to Compare buttons for Iphone and Sony Xperia using Edge browser', async () => {
        result = await clickCompare('Edge', 'Day4', driver)
        expect(result).toBe(true)
    }, 100000)

    test('compare Iphone and Sony Xperia using Edge browser', async () => {
        result = await comparePhones('Edge', 'Day4', driver)
        expect(result).toBe(true)
    }, 100000)


})