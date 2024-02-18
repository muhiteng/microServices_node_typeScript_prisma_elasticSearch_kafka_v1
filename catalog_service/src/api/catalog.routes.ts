import express, { NextFunction, Request, Response } from "express";


const router = express.Router();


// endpoints
router.get(
  "/test",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      return res.status(200).json({mess:'ok'});
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  }
);



export default router;
