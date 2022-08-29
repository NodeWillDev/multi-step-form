import { Router } from "express";
import listingController from "./controller/ListingResume";
import controllerResume from "./controller/PostResume";

const router = Router();

router.post('/add_resume', (req, res) => {
  return controllerResume.handle(req, res);
});

router.get('/listing_resume', (req, res) => {
  return listingController.handle(req, res);
});

export default router;