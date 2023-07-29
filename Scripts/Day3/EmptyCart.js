const { until, By } = require('selenium-webdriver')
const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname, '../../.env')})


let screenshotPath


const emptyCart = async (brwsr, folder, driver) => {

    await driver.manage().setTimeouts({ implicit: 10000 })

    try{

        const emptyCartElement = driver.wait(until.elementLocated(By.xpath("(//button[@name='update_cart_action'])[2]")))
        await driver.wait(until.elementIsVisible(emptyCartElement))
        await emptyCartElement.click()

        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(1000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'empty_message.png')
            await screenshot(driver, screenshotPath)
        } 

        const cartEmptyNote = driver.wait(until.elementLocated(By.xpath("(//div[@class='cart-empty']//p)[1]")))
        await driver.wait(until.elementIsVisible(cartEmptyNote))

        return await cartEmptyNote.getText()

    }catch(error){
        console.error
        return false
    }finally{
        driver.quit()
    }
}


module.exports = {
    emptyCart
}