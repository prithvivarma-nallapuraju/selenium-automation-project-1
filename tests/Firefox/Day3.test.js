const {driverSetup, getHomePageTitle, getMobilePageTitle, sonyAddToCart, changeQuantity, emptyCart} = require('../index.js')

let result, driver = driverSetup('firefox')


describe('verifying the functionalities given on Day 3 with Firefox browser', ()=> {
    
    test('get the HomePage title using Firefox browser', async () => {
        result = await getHomePageTitle('Firefox', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using Firefox browser', async () => {
        result = await getMobilePageTitle('Firefox', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('add the sony xperia mobile to cart using Firefox browser', async () => {
        result = await sonyAddToCart('Firefox', 'Day3', driver)
        expect(result).toBe('Shopping Cart')
    }, 100000)


    test('change the quantity of mobiles using Firefox browser', async () => {
        result = await changeQuantity('Firefox', 'Day3', driver)
        expect(result.trim()).toBe('* The maximum quantity allowed for purchase is 500.')
    }, 100000)

    test('empty the cart using Firefox browser', async () => {
        result = await emptyCart('Firefox', 'Day3', driver)
        expect(result.trim()).toBe('You have no items in your shopping cart.')
    }, 100000)

    
})