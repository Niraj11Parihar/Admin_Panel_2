const CategoryModel = require("../models/category.schema");
const ExtraCategoryModel = require("../models/ExtraCategory.Schema");
const SubCategoryModel = require("../models/SubCategory.Schema");
const userModel = require("../models/user.schema");

// const index = async(req,res) => {
//     try {
//         res.render('index');
//     } catch (error) {
//         console.log(error);
//     }
// }

// Whole authentication process is here

const loginpage = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error);
  }
};

const loginProcess = async (req, res) => {
  try {
    const validUser = await userModel.findOne({ name: req.body.name });
    if (!validUser) {
      res.send("Invalid username");
    } else {
      if (validUser.password === req.body.password) {
        res.render("index");
      }
    }
  } catch (error) {}
};

const registerpage = async (req, res) => {
  try {
    res.render("register");
  } catch (error) {
    console.log(error);
  }
};

// user registration

const registration = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    if (existingUser) {
      res.send("User already exists");
    } else {
      const userdata = await userModel.create(req.body);
      console.log(userdata);
      res.render("login");
    }
  } catch (error) {
    res.send("Issue in login process");
  }
};

const productaddpage = async (req, res) => {
  try {
    let cat = await CategoryModel.find({});
    let subcat = await SubCategoryModel.find({});
    let extracat = await ExtraCategoryModel.find({});
    res.render("./pages/addproduct", { cat, subcat, extracat });
  } catch (error) {
    console.log(error);
  }
};

const CategoryFormPage = async (req, res) => {
  try {
    res.render("./pages/CategoryForm");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  productaddpage,
  CategoryFormPage,
  loginpage,
  registerpage,
  registration,
};
