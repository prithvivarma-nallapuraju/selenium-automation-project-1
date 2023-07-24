const {Builder, Browser} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const edge = require('selenium-webdriver/edge')
const firefox = require('selenium-webdriver/firefox')

let driver, options

const driverSetup = (brwsr) => {

    switch(brwsr){

        case "chrome": {
            options = new chrome.Options()
            options.addArguments(
                '--start-maximized',
                '--disable-infobars'
            )

            driver = new Builder()
                            .forBrowser(Browser.CHROME)
                            .setChromeOptions(options)
                            .build()

            break
        }

        case "edge": {
            options = new edge.Options()
            options.addArguments(
                '--start-maximized',
                '--disable-infobars'
            )

            driver = new Builder()
                            .forBrowser(Browser.EDGE)
                            .setEdgeOptions(options)
                            .build()
            
            break
        }

        case "firefox": {
            options = new firefox.Options()
            options.addArguments(
                '--start-maximized',
                '--disable-infobars'
            )

            driver = new Builder()
                            .forBrowser(Browser.FIREFOX)
                            .setFirefoxOptions(options)
                            .build()

            break
        }


        default: (console.error('invalid browser'))
    }

    return driver
}


module.exports = {
    driverSetup
}