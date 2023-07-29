const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath


const login = async (brwsr, folder, driver, email) => {

    await driver.manage().setTimeouts({ implicit : 10000 })

    try{


        await delay(1000)
        
        await driver.get('http://live.techpanda.org/')

        await delay(1000)


        const reloginElement = await driver.wait(until.elementLocated(By.xpath("(//a[@title='My Account'])[2]")))
        await driver.wait(until.elementIsVisible(reloginElement))
        await reloginElement.click()

        await delay(1000)
        
        const emailElement = await driver.wait(until.elementLocated(By.xpath("//input[@id='email']")))
        await driver.wait(until.elementIsVisible(emailElement))
        await emailElement.clear()
        await emailElement.sendKeys(email)

        await delay(1000)

        const passwordElement = await driver.wait(until.elementLocated(By.xpath("//input[@type='password' and @name='login[password]' and @id='pass']")))
        await driver.wait(until.elementIsVisible(passwordElement))
        await passwordElement.clear()
        await passwordElement.sendKeys('Dummy@01')

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'account_details.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const loginElement = await driver.wait(until.elementLocated(By.id("send2")))
        await driver.wait(until.elementIsVisible(loginElement))
        await loginElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'logged_in.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        return await driver.getTitle()
        
    }catch(error){
        console.error
        return false
    }
}

module.exports = {
    login
}