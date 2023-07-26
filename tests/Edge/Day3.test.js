const {driverSetup, getHomePageTitle, getMobilePageTitle, sonyAddToCart, changeQuantity, emptyCart} = require('../index.js')

let result, driver = driverSetup('edge')


describe('verifying the functionalities given on Day1 with Edge browser', ()=> {
    
    test('get the HomePage title using Edge browser', async () => {
        result = await getHomePageTitle('Edge', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Edge browser', async () => {
        result = await getMobilePageTitle('Edge', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('add the sony xperia mobile to cart using Edge browser', async () => {
        result = await sonyAddToCart('Edge', 'Day3', driver)
        expect(result).toBe('Shopping Cart')
    }, 100000)


    test('change the quantity of mobiles using Edge browser', async () => {
        result = await changeQuantity('Edge', 'Day3', driver)
        expect(result.trim()).toBe('* The maximum quantity allowed for purchase is 500.')
    }, 100000)

    test('empty the cart using Edge browser', async () => {
        result = await emptyCart('Edge', 'Day3', driver)
        expect(result.trim()).toBe('You have no items in your shopping cart.')
    }, 100000)

    
})