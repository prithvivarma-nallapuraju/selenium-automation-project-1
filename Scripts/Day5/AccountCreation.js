const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const accountCreation = async (brwsr, folder, driver, email) => {
    
    await driver.manage().setTimeouts({ implicit : 10000 })

    try{

        await delay(1000)

        const createAccountElement = await driver.wait(until.elementLocated(By.xpath("//a[@class='button' and contains(@title,'Create an Account')]")))
        await driver.wait(until.elementIsVisible(createAccountElement))
        await createAccountElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'before_details.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)
        
        const firstNameElement = await driver.wait(until.elementLocated(By.id('firstname')))
        await driver.wait(until.elementIsVisible(firstNameElement))
        firstNameElement.clear()
        firstNameElement.sendKeys('Prithvi')

        await delay(1000)

        const middleNameElement = await driver.wait(until.elementLocated(By.id("middlename")))
        await driver.wait(until.elementIsVisible(middleNameElement))
        middleNameElement.clear()
        middleNameElement.sendKeys('Varma')

        await delay(1000)

        const lastNameElement = await driver.wait(until.elementLocated(By.id("lastname")))
        await driver.wait(until.elementIsVisible(lastNameElement))
        lastNameElement.clear()
        lastNameElement.sendKeys('Nallapuraju')

        await delay(1000)

        const emailElement = await driver.wait(until.elementLocated(By.id("email_address")))
        await driver.wait(until.elementIsVisible(emailElement))
        emailElement.clear()
        emailElement.sendKeys(email)

        const passwordElement = await driver.wait(until.elementLocated(By.id("password")))
        await driver.wait(until.elementIsVisible(passwordElement))
        passwordElement.sendKeys('Dummy@01')

        await delay(1000)

        const confirmationElement = await driver.wait(until.elementLocated(By.id("confirmation")))
        await driver.wait(until.elementIsVisible(confirmationElement))
        confirmationElement.sendKeys('Dummy@01')

        await delay(1000)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'after_details.png')
            await screenshot(driver, screenshotPath)
        }

        await delay(1000)

        const registerElement = await driver.wait(until.elementLocated(By.xpath("//button[@class='button' and contains(@title, 'Register')]")))
        await driver.wait(until.elementIsVisible(registerElement))
        await registerElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'error_account_creation.png')
            await screenshot(driver, screenshotPath)
        }

        return true

    }catch(error){
        console.error
        return false
    }
}


module.exports = {
    accountCreation
}