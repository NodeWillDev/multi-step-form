import cors from "cors";
import express, { Express } from "express";
import router from "./routes";

class App {

  public express: Express;

  constructor() {
    this.express = express();
    this.init();
  }

  init() {
    this.express.use(cors())
    this.express.use(express.json());
    this.express.use(router);
  }
}

export default new App().express;