import app from "./app";

const express = app;

express.listen(process.env.PORT || 3333, () => {
  console.log(`🎇Server started on port ${process.env.PORT}`)
})