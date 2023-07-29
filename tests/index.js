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
const { clickOnMyAccount } = require('../Scripts/Day5/ClickOnMyAccount')
const { accountCreation } = require('../Scripts/Day5/AccountCreation')
const { login } = require('../Scripts/Day5/Login')
const { goToTV } = require('../Scripts/Day5/GoToTV')
const { shareWishlist } = require('../Scripts/Day5/ShareWishlist')
const { checkout } = require('../Scripts/Day6/Checkout')
const { shippingInformation } = require('../Scripts/Day6/ShippingInformation')
const { placeOrder } = require('../Scripts/Day6/placeOrder')


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
    comparePhones,
    clickOnMyAccount,
    accountCreation,
    login,
    goToTV,
    shareWishlist,
    checkout,
    shippingInformation,
    placeOrder
    
}   