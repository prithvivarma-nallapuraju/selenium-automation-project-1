const { driverSetup } = require('../../utils/Driver')
const {getHomePageTitle, getMobilePageTitle, sonyAddToCart, changeQuantity, emptyCart} = require('../index.js')

let result, driver = driverSetup('safari')


describe('verifying the functionalities given on Day 3 with Safari browser', ()=> {
    
    test('get the HomePage title using Safari browser', async () => {
        result = await getHomePageTitle('Safari', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Safari browser', async () => {
        result = await getMobilePageTitle('Safari', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('add the sony xperia mobile to cart using Safari browser', async () => {
        result = await sonyAddToCart('Safari', 'Day3', driver)
        expect(result).toBe('Shopping Cart')
    }, 100000)


    test('change the quantity of mobiles using Safari browser', async () => {
        result = await changeQuantity('Safari', 'Day3', driver)
        expect(result.trim()).toBe('* The maximum quantity allowed for purchase is 500.')
    }, 100000)

    test('empty the cart using Safari browser', async () => {
        result = await emptyCart('Safari', 'Day3', driver)
        expect(result.trim()).toBe('You have no items in your shopping cart.')
    }, 100000)

    
})