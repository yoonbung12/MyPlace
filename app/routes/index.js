const express = require("express");
const mainRouter = express.Router();
const userRouter = express.Router();
const galleryRouter = express.Router();

// 메인페이지 관련
const main = require("../controller/Cmain");
mainRouter.get("/", main.mainPage);

// 로그인 관련
const signin = require("../controller/Csignin");
userRouter.get("/signin", signin.loginPage);
userRouter.post("/signin", signin.postLogin);

// 회원가입 관련
const signup = require("../controller/Csignup");
userRouter.get("/signup", signup.signUpPage);
userRouter.post("/signup", signup.postSignUp);

// 마이페이지(회원정보 수정) 관련
const profile = require("../controller/Cprofile");
userRouter.get("/profile", profile.profilePage);
userRouter.patch("/profile/edit/:u_id", profile.profileEdit);
userRouter.delete("/profile/delete/:u_id", profile.profileDelete);

// 카테고리 관련
const category = require("../controller/Clist");
galleryRouter.get("/category", category.categoryPage);


const router = express.Router();
router.get("/editProfile_select", function (req, res) {
  res.render("editProfile_select");
});



module.exports = {
  mainRouter,
  userRouter,
  galleryRouter,
  router,
};
