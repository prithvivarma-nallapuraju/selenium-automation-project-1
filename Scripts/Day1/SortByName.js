const { until, By } = require('selenium-webdriver')
const { screenshot } = require('../../utils/Screenshot')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath

const sortByName = async (brwsr, driver) => {
    try{
        const dropdownElement = await driver.wait(until.elementLocated(By.xpath("(//select[@title='Sort By'])[1]")), 5000)
        await driver.wait(until.elementIsVisible(dropdownElement))
        await dropdownElement.sendKeys('Name')
        
        if(process.env.CAPTURE_SCREENSHOTS === 'true'){
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/Day1`, 'sort_by_name.png')
            await screenshot(driver, screenshotPath)
        }
        
        const descendingElement = await driver.wait(until.elementLocated(By.xpath("(//a[@class='sort-by-switcher sort-by-switcher--asc'])[1]")), 5000)
        await driver.wait(until.elementIsVisible(descendingElement))
        await descendingElement.click()

        if(process.env.CAPTURE_SCREENSHOTS === 'true'){
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/Day1`, 'descending_sort.png')
            await screenshot(driver, screenshotPath)
        }

        return true
    }catch(error){
        console.error
        return false
    }
}


module.exports = {
    sortByName
}