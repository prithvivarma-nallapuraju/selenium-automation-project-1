const { until, By } = require('selenium-webdriver')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})


const getPriceOnSonyPage = async (driver) => {
    
    await driver.manage().setTimeouts({ implicit: 10000 })
    
    try{

        const priceElement = await driver.wait(until.elementLocated(By.className('price')))
        await driver.wait(until.elementIsVisible(priceElement))
        return await priceElement.getText()

    }catch(error){
        console.error
        return false
    }finally{
        driver.quit()
    }
}


module.exports = {
    getPriceOnSonyPage
}