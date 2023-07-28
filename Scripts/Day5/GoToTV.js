const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath 

const goToTV = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit: 10000 })

    try{

        await delay(1000)

        const tvElement = await driver.wait(until.elementLocated(By.xpath("//a[contains(@href,'/tv.html') and contains(@class, 'level0')]")))
        await driver.wait(until.elementIsVisible(tvElement))
        tvElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'tv_page.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const wishListElement = await driver.wait(until.elementLocated(By.xpath("(//a[@class='link-wishlist'])[1]")))
        await driver.wait(until.elementIsVisible(wishListElement))
        wishListElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'wishlist_added.png')
            await screenshot(driver, screenshotPath)
        }

        return true

    }catch(error){
        console.error
        return false
    }
}

module.exports = {
    goToTV
}