const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const checkout = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit : 10000 })

    try{
        await delay(1000)

        const wishListElement = await driver.wait(until.elementLocated(By.xpath("(//li/a[contains(@href, 'wishlist')])[2]")))
        await driver.wait(until.elementIsVisible(wishListElement))
        await wishListElement.click()


        await delay(1000)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'my_wishlist.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const addToCartElement = await driver.wait(until.elementLocated(By.xpath("//button[@title='Add to Cart']")))
        await driver.wait(until.elementIsVisible(addToCartElement))
        await addToCartElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'cart_added.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const proceedElement = await driver.wait(until.elementLocated(By.xpath("//button[@title='Proceed to Checkout']")))
        await driver.wait(until.elementIsVisible(proceedElement))
        await proceedElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'billing_information.png')
            await screenshot(driver, screenshotPath)
        }

        return true

    }catch(error){
        console.error
        return true
    }
}

module.exports = {
    checkout
}