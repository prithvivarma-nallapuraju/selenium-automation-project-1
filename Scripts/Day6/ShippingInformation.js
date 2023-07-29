const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const shippingInformation = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit : 10000 })

    try{

        await delay(1000)

        const firstNameElement = await driver.wait(until.elementLocated(By.id('billing:firstname')))
        await driver.wait(until.elementIsVisible(firstNameElement))
        await firstNameElement.clear()
        await firstNameElement.sendKeys('Prithvi')

        const middleNameElement = await driver.wait(until.elementLocated(By.id('billing:middlename')))
        await driver.wait(until.elementIsVisible(middleNameElement))
        await middleNameElement.clear()
        await middleNameElement.sendKeys('Varma')

        const lastNameElement = await driver.wait(until.elementLocated(By.id('billing:lastname')))
        await driver.wait(until.elementIsVisible(lastNameElement))
        await lastNameElement.clear()
        await lastNameElement.sendKeys('Nallapuraju')

        const companyElement = await driver.wait(until.elementLocated(By.id('billing:company')))
        await driver.wait(until.elementIsVisible(companyElement))
        await companyElement.clear()
        await companyElement.sendKeys('PVN Companies')

        const addressElement = await driver.wait(until.elementLocated(By.id('billing:street1')))
        await driver.wait(until.elementIsVisible(addressElement))
        await addressElement.clear()
        await addressElement.sendKeys('ABC')

        const addressElement2 = await driver.wait(until.elementLocated(By.id('billing:street2')))
        await driver.wait(until.elementIsVisible(addressElement2))
        await addressElement2.clear()
        await addressElement2.sendKeys('DEF')

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'adress_details_1.png')
            await screenshot(driver, screenshotPath)
        }

        const cityElement = await driver.wait(until.elementLocated(By.id('billing:city')))
        await driver.wait(until.elementIsVisible(cityElement))
        await cityElement.clear()
        await cityElement.sendKeys('New York')

        const zipElement = await driver.wait(until.elementLocated(By.id('billing:postcode')))
        await driver.wait(until.elementIsVisible(zipElement))
        await zipElement.clear()
        await zipElement.sendKeys(542896)

        const countryDropdown = await driver.wait(until.elementLocated(By.id("billing:country_id")))
        await driver.wait(until.elementIsVisible(countryDropdown))
        await countryDropdown.findElement(By.xpath("//option[. = 'United States']")).click()

        const regionDropdown = await driver.wait(until.elementLocated(By.id("billing:region_id")))
        await driver.wait(until.elementIsVisible(regionDropdown))
        await regionDropdown.findElement(By.xpath("//option[. = 'New York']")).click()

        const telephoneElement = await driver.wait(until.elementLocated(By.id('billing:telephone')))
        await driver.wait(until.elementIsVisible(telephoneElement))
        await telephoneElement.clear()
        await telephoneElement.sendKeys(1234567890)

        const faxElement = await driver.wait(until.elementLocated(By.id('billing:fax')))
        await driver.wait(until.elementIsVisible(faxElement))
        await faxElement.clear()
        await faxElement.sendKeys(1234567890)

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'adress_details_2.png')
            await screenshot(driver, screenshotPath)
        }

        const continueElement = await driver.wait(until.elementLocated(By.xpath("(//button[@title='Continue'])[1] ")))
        await driver.wait(until.elementIsVisible(continueElement))
        await continueElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'after_shipping.png')
            await screenshot(driver, screenshotPath)
        }

        return true

    }catch(error){
        console.error
        return false
    }

}

module.exports = {
    shippingInformation
}