const { until, By } = require('selenium-webdriver')
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})


let screenshotPath

const clickOnSony = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit: 10000 })

    try{
        
        const sonyElement = await driver.wait(until.elementLocated(By.xpath("//a[@title='Xperia']")))
        await driver.wait(until.elementIsVisible(sonyElement))
        await sonyElement.click()

        if(process.env.CAPTURE_SCREENSHOTS === 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`, 'sony_page.png')
            await screenshot(driver, screenshotPath)
        }

        return await driver.getTitle()
    }catch(error){
        console.log(error)
        return false
    }
}

module.exports = {
    clickOnSony
}