const { until, By } = require("selenium-webdriver")
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})


let screenshotPath

const clickCompare = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit : 10000 })

    try{
        
        await delay(1000)
        const addToCompareElement1 = await driver.wait(until.elementLocated(By.xpath('//div[@class="product-info" and contains(h2/a/@title, "Sony Xperia")]/div[@class="actions"]/ul[@class="add-to-links"]/li/a[@class="link-compare"]')))
        await driver.wait(until.elementIsVisible(addToCompareElement1))
        await addToCompareElement1.click()
        
        
        await delay(1000)
        const addToCompareElement2 = await driver.wait(until.elementLocated(By.xpath('//div[@class="product-info" and contains(h2/a/@title, "IPhone")]/div[@class="actions"]/ul[@class="add-to-links"]/li/a[@class="link-compare"]')))
        await driver.wait(until.elementIsVisible(addToCompareElement2))
        await addToCompareElement2.click()

        if(process.env.CAPTURE_SCREENSHOTS=='true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'add_to_compare.png')
            await screenshot(driver, screenshotPath)
        }

        return true

    }catch(error){
        console.error
        return false
    }

}


module.exports = {
    clickCompare
}