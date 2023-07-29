const { until, By } = require('selenium-webdriver')
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname, '../../.env')})


let screenshotPath


const sonyAddToCart = async (brwsr, folder, driver) => {
    
    await driver.manage().setTimeouts({ implicit: 10000 })

    try{

        const addToCartElement = await driver.wait(until.elementLocated(By.xpath("//h2[@class='product-name']/a[text()='Sony Xperia']/ancestor::li//button[@title='Add to Cart']")))
        await driver.wait(until.elementIsVisible(addToCartElement))
        await addToCartElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'add_to_cart.png')
            await screenshot(driver, screenshotPath)
        }

        return await driver.getTitle()

    }catch(error){
        console.error
        return false
    }
}

module.exports = {
    sonyAddToCart
}