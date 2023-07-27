//const { driverSetup } = require('../utils/Driver')
const { driverSetup } = require('../utils/DriverHeadless')
const { getHomePageTitle } = require('../Scripts/Day1/GetHomePageTitle')
const { getMobilePageTitle } = require('../Scripts/Day1/GetMobilePageTitle')
const { sortByName } = require('../Scripts/Day1/SortByName')
const { getCostOfSony } = require('../Scripts/Day2/GetCostOfSony')
const { clickOnSony } = require('../Scripts/Day2/ClickOnSony')
const { getPriceOnSonyPage } = require('../Scripts/Day2/GetPriceOnSonyPage')
const { sonyAddToCart } = require('../Scripts/Day3/SonyAddToCart')
const { changeQuantity } = require('../Scripts/Day3/ChangeQuantity')
const { emptyCart } = require('../Scripts/Day3/EmptyCart')
const { clickCompare } = require('../Scripts/Day4/ClickCompare')
const { comparePhones } = require('../Scripts/Day4/comparePhones')

module.exports = {
    driverSetup,
    getHomePageTitle,
    getMobilePageTitle,
    sortByName,
    getCostOfSony,
    clickOnSony,
    getPriceOnSonyPage,
    sonyAddToCart,
    changeQuantity,
    emptyCart,
    clickCompare,
    comparePhones
}   