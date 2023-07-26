const { until, By } = require('selenium-webdriver')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})


const getCostOfSony = async (driver) => {

    await driver.manage().setTimeouts({ implicit: 10000 })
    
    try{

        const costElement = await driver.wait(until.elementLocated(By.xpath('//*[@id="product-price-1"]/span')))
        await driver.wait(until.elementIsVisible(costElement))

        return await costElement.getText()

    }catch(error){
        console.error()
        return false
    }
}


module.exports = {
    getCostOfSony
}