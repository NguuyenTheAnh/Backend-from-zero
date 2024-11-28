import express from 'express';
import { getHomePage, postCreateUser, getCreatePage, getUpdatePage } from '../controllers/homeController.js';

const router = express.Router();

router.get("/", getHomePage)

router.get("/create", getCreatePage)
router.post("/create-user", postCreateUser);

router.get("/update/:id", getUpdatePage);

export { router };