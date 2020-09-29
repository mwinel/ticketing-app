import express, { Request, Response } from "express";
import { NotFoundError } from "@mwineltickets/common";

import { Ticket } from "../models/ticket";

const router = express.Router();

router.get("/api/v1/tickets/:id", async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket)
});

export { router as retrieveTicketRouter };
