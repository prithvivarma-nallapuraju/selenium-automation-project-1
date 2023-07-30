const { until, By } = require('selenium-webdriver')
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname, '../../.env')})


let screenshotPath


const changeQuantity = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit: 10000 })

    try{

        const quantityElement = await driver.wait(until.elementLocated(By.xpath("//input[@class='input-text qty']")))
        await driver.wait(until.elementIsVisible(quantityElement))
        await quantityElement.click()
        await quantityElement.clear()
        await quantityElement.sendKeys(1000)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'changeQuantity.png')
            await screenshot(driver, screenshotPath)
        }        

        const updateElement = await driver.wait(until.elementLocated(By.xpath("(//button[@name='update_cart_action'])[4]")))
        await driver.wait(until.elementIsVisible(updateElement))
        await updateElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'error_message.png')
            await screenshot(driver, screenshotPath)
        }

        const errorElement = await driver.wait(until.elementLocated(By.xpath("//p[@class='item-msg error']")))
        await driver.wait(until.elementIsVisible(errorElement))

        return await errorElement.getText()

    }catch(error){
        console.error
        return false
    }
}

module.exports = {
    changeQuantity
}