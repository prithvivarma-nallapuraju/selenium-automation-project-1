const { until, By } = require("selenium-webdriver")
const { delay } = require("../../utils/Delay")
const mainpath = require('path')
const { screenshot } = require("../../utils/Screenshot")
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})


let screenshotPath

const clickOnMyAccount = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit : 10000})

    try{
        
        await delay(1000)

        const accountElement = await driver.wait(until.elementLocated(By.xpath("(//a[@title='My Account'])[2]")))
        await driver.wait(until.elementIsVisible(accountElement))
        await accountElement.click()

        await delay(1000)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'my_account.png')
            await screenshot(driver, screenshotPath)
        }

        return await driver.getTitle()

    }catch(error){
        console.error
        return false
    }
}


module.exports = {
    clickOnMyAccount
}