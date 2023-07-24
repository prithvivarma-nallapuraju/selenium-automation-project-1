const { screenshot } = require('../../utils/Screenshot')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname, '../../.env')})

let screenshotPath, driver 

const getHomePageTitle = async (brwsr, drvr) => {
    try{
        driver = drvr
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.manage().window().maximize()
        await driver.get('http://live.techpanda.org/')
        screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/Day1`,'home_page.png')
        await screenshot(driver, screenshotPath)

        const title = await driver.getTitle()
        return title
    }catch(error){
        console.error
        return false
    }
}

module.exports = {
    driver,
    getHomePageTitle
}