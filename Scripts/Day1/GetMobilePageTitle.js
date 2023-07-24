const { until, By } = require('selenium-webdriver')
const { screenshot } = require('../../utils/Screenshot')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})
let screenshotPath

const getMobilePageTitle = async (brwsr, driver) => {
    try{
        await driver.manage().setTimeouts({ implicit: 10000 });
        const mobileElement = await driver.wait(until.elementLocated(By.xpath("(//a[@class='level0 '])[1]")))
        await driver.wait(until.elementIsVisible(mobileElement))
        await mobileElement.click()
        
        if(process.env.CAPTURE_SCREENSHOTS === 'true'){
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/Day1`, 'mobile_page.png')
            await screenshot(driver, screenshotPath)
        }

        const title = driver.getTitle()
        return title

    }catch(error){
        console.error
        return false
    }
}




module.exports = {
    getMobilePageTitle
}