const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const comparePhones = async (brwsr, folder, driver) => {
    
    await driver.manage().setTimeouts({ implicit: 10000 })
    
    try{

        const mainTabHandle = await driver.getWindowHandle()

        await delay(1000)
        const compareElement = await driver.wait(until.elementLocated(By.xpath("//button[contains(@title, 'Compare') and @class='button']")))
        await driver.wait(until.elementIsVisible(compareElement))
        await compareElement.click()
        
        await delay(1000)
        driver.getAllWindowHandles().then(handles => {
            const newTabHandle = handles[handles.length-1]
            driver.switchTo().window(newTabHandle)
        })
        
        if(process.env.CAPTURE_SCREENSHOTS=='true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'final_comparison.png')
            await screenshot(driver, screenshotPath)
        }

        const closeButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(@title,'Close Window') and @class='button']")))
        await driver.wait(until.elementIsVisible(closeButton))
        await closeButton.click()

        await driver.switchTo().window(mainTabHandle)

        const clearAllButton = await driver.wait(until.elementLocated(By.xpath("//a[contains(@href, 'catalog/product_compare/clear')]")))
        await driver.wait(until.elementIsVisible(clearAllButton))
        await clearAllButton.click()

        await driver.switchTo().alert().dismiss()

        await clearAllButton.click()

        await driver.switchTo().alert().accept()

        return true

    }catch(error){
        console.error
        return false
    }finally{
        driver.quit()
    }
}

module.exports = {
    comparePhones
}