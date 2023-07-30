const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const reorder = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({implicit : 10000 })

    try{
        const reOrderElement = await driver.wait(until.elementLocated(By.xpath("(//a[@class='link-reorder'])[1]")))
        await driver.wait(until.elementIsVisible(reOrderElement))
        await reOrderElement.click()

        await delay(1000)

        const quantityElement = await driver.wait(until.elementLocated(By.xpath("//input[@title='Qty']")))
        await driver.wait(until.elementIsVisible(quantityElement))
        await quantityElement.click()
        await quantityElement.clear()
        await quantityElement.sendKeys(15)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'update_quantity.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const updateElement = await driver.wait(until.elementLocated(By.xpath("//button[@title='Update']")))
        await driver.wait(until.elementIsVisible(updateElement))
        await updateElement.click()

        await delay(1000)

        const proceedElement = await driver.wait(until.elementLocated(By.xpath('(//button[@title="Proceed to Checkout"])[1]')))
        await driver.wait(until.elementIsVisible(proceedElement))
        await proceedElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'shipping_information.png')
            await screenshot(driver, screenshotPath)
        }

        return true

    }catch(error){
        console.error
        return false
    }
}


module.exports = {
    reorder
}