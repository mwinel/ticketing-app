import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

it("returns a 201 on successful ticket creation with valid inputs.", async () => {
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);

  const title = "test title";

  await request(app)
    .post("/api/v1/tickets")
    .set("Cookie", global.signin())
    .send({
      title,
      price: 35,
    })
    .expect(201);

  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
  expect(tickets[0].title).toEqual(title);
  expect(tickets[0].price).toEqual(35);
});

it("returns a 401 status code if user is not signed in.", async () => {
  const response = await request(app)
    .post("/api/v1/tickets")
    .set("Cookie", global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it("returns an error if an invalid title is provided.", async () => {
  await request(app)
    .post("/api/v1/tickets")
    .set("Cookie", global.signin())
    .send({
      title: "",
      price: 10,
    })
    .expect(400);
});

it("returns an error if an invalid price is provided.", async () => {
  await request(app)
    .post("/api/v1/tickets")
    .set("Cookie", global.signin())
    .send({
      title: "test title",
      price: -10,
    })
    .expect(400);

  await request(app)
    .post("/api/v1/tickets")
    .set("Cookie", global.signin())
    .send({
      title: "test title",
    })
    .expect(400);
});
