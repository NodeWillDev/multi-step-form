import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  return res.json({
    success: 'In developed'
  })
});

export default router;