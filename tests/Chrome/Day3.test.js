const {driverSetup, getHomePageTitle, getMobilePageTitle, sonyAddToCart, changeQuantity, emptyCart} = require('../index.js')

let result, driver = driverSetup('chrome')


describe('verifying the functionalities given on Day 3 with chrome browser', ()=> {
    
    test('get the HomePage title using chrome browser', async () => {
        result = await getHomePageTitle('Chrome', 'Day3', driver)
        expect(result).toBe('Home page')
    }, 100000)


    test('get the mobilePage title using chrome browser', async () => {
        result = await getMobilePageTitle('Chrome', 'Day3', driver)
        expect(result).toBe('Mobile')
    }, 100000)


    test('add the sony xperia mobile to cart using chrome browser', async () => {
        result = await sonyAddToCart('Chrome', 'Day3', driver)
        expect(result).toBe('Shopping Cart')
    }, 100000)


    test('change the quantity of mobiles using chrome browser', async () => {
        result = await changeQuantity('Chrome', 'Day3', driver)
        expect(result.trim()).toBe('* The maximum quantity allowed for purchase is 500.')
    }, 100000)

    test('empty the cart using chrome browser', async () => {
        result = await emptyCart('Chrome', 'Day3', driver)
        expect(result.trim()).toBe('You have no items in your shopping cart.')
    }, 100000)


})