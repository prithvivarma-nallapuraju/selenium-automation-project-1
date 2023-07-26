const fs = require('fs')

const screenshot = async (driver, screenshotPath) => {
    const screenshotData = await driver.takeScreenshot()
    fs.writeFileSync(screenshotPath, screenshotData, 'base64')
}

module.exports = {
    screenshot
}