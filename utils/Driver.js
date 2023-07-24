const {Builder, Browser} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const edge = require('selenium-webdriver/edge')
const firefox = require('selenium-webdriver/firefox')

let driver, options

const driverSetup = (brwsr) => {

    switch(brwsr){

        case "chrome": {
            driver =  new Builder()
                            .forBrowser(Browser.CHROME)
                            .build()

            break
        }

        case "edge": {
            driver =  new Builder()
                            .forBrowser(Browser.EDGE)
                            .build()
            
            break
        }

        case "firefox": {
            driver = new Builder()
                            .forBrowser(Browser.FIREFOX)
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