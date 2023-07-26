//const { driverSetup } = require('../utils/Driver')
const { driverSetup } = require('../utils/DriverHeadless')
const { getHomePageTitle } = require('../Scripts/Day1/GetHomePageTitle')
const { getMobilePageTitle } = require('../Scripts/Day1/GetMobilePageTitle')
const { sortByName } = require('../Scripts/Day1/SortByName')
const { getCostOfSony } = require('../Scripts/Day2/GetCostOfSony')
const { clickOnSony } = require('../Scripts/Day2/ClickOnSony')
const { getPriceOnSonyPage } = require('../Scripts/Day2/GetPriceOnSonyPage')

module.exports = {
    driverSetup,
    getHomePageTitle,
    getMobilePageTitle,
    sortByName,
    getCostOfSony,
    clickOnSony,
    getPriceOnSonyPage
}   