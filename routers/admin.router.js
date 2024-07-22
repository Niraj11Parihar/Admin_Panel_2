const { Router } = require("express");
const {productaddpage, CategoryFormPage, loginpage, registerpage, registration} = require("../controllers/admin.controller");

const router = Router();

router.get('/',loginpage);
router.get('/register',registerpage);
router.post('/registration',registration);
router.get('/addproduct',productaddpage);
router.get('/CategoryForm',CategoryFormPage);

module.exports = router