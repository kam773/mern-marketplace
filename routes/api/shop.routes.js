const express = require('express')
const authCtrl = require('../../controllers/auth.controller')
const shopCtrl = require('../../controllers/shop.controller')
const userCtrl = require('../../controllers/user.controller')

const router = express.Router()

router.route('/api/shops')
  .get(shopCtrl.list)

router.route('/api/shop/:shopId')
  .get(shopCtrl.read)

router.route('/api/shops/by/:userId')
  .post(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.isSeller, shopCtrl.create)
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, shopCtrl.listByOwner)

router.route('/api/shops/:shopId')
  .put(authCtrl.requireSignin, shopCtrl.isOwner, shopCtrl.update)
  .delete(authCtrl.requireSignin, shopCtrl.isOwner, shopCtrl.remove)

router.route('/api/shops/logo/:shopId')
  .get(shopCtrl.photo)

router.param('shopId', shopCtrl.shopByID)
router.param('userId', userCtrl.userByID)

module.exports = router