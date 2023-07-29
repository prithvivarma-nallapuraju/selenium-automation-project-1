const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const orderPlace = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit : 10000})

    try{
        
        await delay(1000)

        const continueElement = await driver.wait(until.elementLocated(By.xpath('//button[@onclick="shippingMethod.save()"]')))
        await driver.wait(until.elementIsVisible(continueElement))
        await continueElement.click()

        await delay(1000)

        const radioElement = await driver.wait(until.elementLocated(By.xpath("//input[@id='p_method_checkmo']")))
        await driver.wait(until.elementIsVisible(radioElement))
        radioElement.click()

        await delay(1000)

        const continueElement2 = await driver.wait(until.elementLocated(By.xpath('//button[@onclick="payment.save()"]')))
        await driver.wait(until.elementIsVisible(continueElement2))
        await continueElement2.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'final_verification.png')
            await screenshot(driver, screenshotPath)
        }

        const orderElement = await driver.wait(until.elementLocated(By.xpath("//button[@onclick='review.save();']")))
        await driver.wait(until.elementIsVisible(orderElement))
        await orderElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'order_placed.png')
            await screenshot(driver, screenshotPath)
        }

        return true

    }catch(error){
        console.error
        return false
    }finally{
        driver.quit()
    }
}

module.exports = {
    orderPlace
}