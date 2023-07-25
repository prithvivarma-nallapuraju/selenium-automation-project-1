const {Builder, Browser} = require('selenium-webdriver')

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

        case "safari": {

            driver = new Builder()
                            .forBrowser(Browser.SAFARI)
                            .setSafariOptions(options)
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