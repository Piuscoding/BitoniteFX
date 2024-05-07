const express = require('express');
// const multer = require('multer');
const router = express.Router();

const userController = require('../controllers/userController');


// image upload
// var storage = multer.diskStorage({
//     destination: function(req, res, cb){
//         cb(null, './uploads');
//     },
//     filename: function(req, file,cb){
//         cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
//     }
// })

// var upload = multer({
//     storage: storage,
// }).single("image");



router.get('/dashboard',userController.dashboardPage);



router.get('/verify-account',userController.verifyPage);
router.post('/verify/:id', userController.verifyPage_post);

router.get('/account/:id',userController.accountPage)
router.put('/account/:id',userController.accountPage_post)
// router.get('/editProfile',userController.editProfilePage);
// router.get('/transactions/:id',userController.transactionPage);

router.get('/deposit', userController.depositPage);
router.post('/deposit/:id', userController.depositPage_post);
router.get('/depositHistory/:id',userController.depositHistory);

router.get('/withdraw',userController.widthdrawPage);
router.post('/widthdraw/:id',userController.widthdrawPage_post);
router.get('/widthdrawHistory/:id',userController.widthdrawHistory);

router.get('/buyCrypto', userController.buyCrypto)

router.get('/assets', userController.assetsPage)

router.get('/trade', userController.tradePage)

router.get('/market', userController.marketPage)

module.exports = router;

