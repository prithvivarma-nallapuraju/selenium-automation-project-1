const { screenshot } = require('../../utils/Screenshot')
const { delay } = require('../../utils/Delay')
const mainpath = require('path')
require('dotenv').config({path: mainpath.join(__dirname,'../../.env')})

let screenshotPath
let driver
const getHomePageTitle = async (brwsr, folder, drvr) => {
    
    driver = drvr
    await driver.manage().setTimeouts({ implicit: 10000 })
    
    try{
        await driver.manage().window().maximize()
        await driver.get('http://live.techpanda.org/')
        
        if(process.env.CAPTURE_SCREENSHOTS == 'true'){
            await delay(3000)
            screenshotPath = mainpath.join(__dirname, `../../Outputs/${brwsr}/${folder}`,'home_page.png')
            await screenshot(driver, screenshotPath)
        }

        const title = await driver.getTitle()
        return title

    }catch(error){
        console.error
        return false
    }
}

module.exports = {
    getHomePageTitle
}