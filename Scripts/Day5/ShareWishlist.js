const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const shareWishlist = async (brwsr, folder, driver, email) => {

    await driver.manage().setTimeouts({ implicit : 10000 })

    try{

        const shareElement = await driver.wait(until.elementLocated(By.xpath("//button[@title='Share Wishlist']")))
        await driver.wait(until.elementIsVisible(shareElement))
        await shareElement.click()

        await delay(1000)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'before_share.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const emailElement = await driver.wait(until.elementLocated(By.id("email_address")))
        await driver.wait(until.elementIsVisible(emailElement))
        await emailElement.clear()
        await emailElement.sendKeys(email)

        await delay(1000)

        const messageElement = await driver.wait(until.elementLocated(By.id("message")))
        await driver.wait(until.elementIsVisible(messageElement))
        await messageElement.clear()
        await messageElement.sendKeys(`This is the wish list I am sharing to ${email}`)

        await delay(1000)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'after_share.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const shareButtonElement = await driver.wait(until.elementLocated(By.xpath("//button[@title='Share Wishlist']")))
        await driver.wait(until.elementIsVisible(shareButtonElement))
        await shareButtonElement.click()

        await delay(1000)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'success_share.png')
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
    shareWishlist
}