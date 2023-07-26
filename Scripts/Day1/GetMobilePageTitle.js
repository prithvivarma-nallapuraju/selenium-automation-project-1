const { until, By } = require('selenium-webdriver')
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})
let screenshotPath

const getMobilePageTitle = async (brwsr, folder, driver) => {
    
    await driver.manage().setTimeouts({ implicit: 10000 })
    
    try{
    
        const mobileElement = await driver.wait(until.elementLocated(By.xpath("(//a[@class='level0 '])[1]")))
        await driver.wait(until.elementIsVisible(mobileElement))
        await mobileElement.click()
        
        if(process.env.CAPTURE_SCREENSHOTS === 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`, 'mobile_page.png')
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