
const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

//************************************* */  Admin Dashboard  routes**********************//

router.get('/adminRoute',adminController.adminPage );

router.get('/viewUser/:id',adminController.viewUser );

router.get('/editUser/:id',adminController.editUser );

router.put('/editUser/:id', adminController.editUser_post);

// //************************************* */ All Deposits  routes**********************//

router.get('/allFunding',adminController.allDeposit );

router.get('/viewDeposit/:id',adminController.viewDeposit );

router.get('/editDeposit/:id',adminController.editDeposit);

router.put('/editDeposit/:id',adminController.editDeposit_post );

// //************************************* */ All Widthdrawals  routes**********************//

router.get('/allWidthdrawals',adminController.allWidthdrawal );

router.get('/viewWidthdrawals/:id',adminController.viewWidthdrawal );

// router.get('/editWidthdrawals',adminController.editWidthdrawal );
// router.put('/editWidthdrawals/:id',adminController.editWidthdrawal_post );

// //************************************* */ All Verification routes**********************//
router.get('/allVerify',adminController.allVerification );
router.get('/viewVerify/:id',adminController.viewVerify);


// //************************************* */ All live trades routes**********************//
// router.get("/all-livetrade", adminController.alllivetradePage)
// router.get("/view-livetrade/:id", adminController.viewlivetradePage)
// router.get("/edit-livetrade/:id", adminController.editlivetradePage)
// router.put('/editVerification/:id',adminController.editLivetrade_post );



// //************************************* */ All Delete routes**********************//
router.delete('/deleteUser/:id', adminController.deletePage);
router.delete('/deleteDeposit/:id', adminController.deleteDeposit);
router.delete('/deleteWidthdrawal/:id', adminController.deleteWidthdraw)
router.delete('/deleteVerification/:id', adminController.deleteVerification)
// router.delete("/deletelivetrade/:id", adminController.deleteLivetrade)


module.exports = router;
