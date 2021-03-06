import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@mwineltickets/common";

import { createTicketRouter } from "./routes/new";
import { retrieveTicketRouter } from "./routes/retrieve-ticket";
import { indexTicketRouter } from "./routes/index";
import { updateTicketRouter } from "./routes/update-ticket";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

app.use(createTicketRouter);
app.use(retrieveTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all("*", async (res, req) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
