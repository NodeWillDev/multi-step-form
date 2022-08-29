import app from "./app";
import { AppDataSource } from "./typeorm/data-source";

const express = app;

express.listen(process.env.PORT || 3333, async () => {
  console.log(`🎇 Server started on port ${process.env.PORT}`)
  AppDataSource.initialize().then(() => {
    console.log("Success");
  }).catch(err => {
    console.log(err, "Database not started");
  })
})