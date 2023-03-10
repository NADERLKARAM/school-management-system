const express = require("express");
const {
  registerAdmCtrl,
  adminPublishResultsCtrl,
  adminSuspendTeacherCtrl,
  adminUnPublishResultsCtrl,
  adminUnSuspendTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminWithdrawTeacherCtrl,
  deleteAdminCtrl,
  getAdminProfileCtrl,
  getAdminsCtrl,
  loginAdminCtrl,
  updateAdminCtrl,
} = require("../../controller/staff/adminCtrl");
const advancedResults = require("../../middlewares/advancedResults");
const isAdmin = require("../../middlewares/isAdmin");
const isAuthenticated = require("../../middlewares/isAuthenticated");
const isLogin = require("../../middlewares/isLogin");
const roleRestriction = require("../../middlewares/roleRestriction");
const Admin = require("../../model/Staff/Admin");
const adminRouter = express.Router();

//register
adminRouter.post("/register", registerAdmCtrl);

//login
adminRouter.post("/login", loginAdminCtrl);
