import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../app";
import { cookie } from "express-validator";

it("returns a 404 if the provided ticket id does not exist.", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", global.signin())
    .send({
      title: "test title",
      price: 5,
    })
    .expect(404);
});

it("returns a 401 if the user is not authenticated.", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/tickets/${id}`)
    .send({
      title: "test title",
      price: 5,
    })
    .expect(401);
});

it("returns a 401 if the user does not own the ticket.", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title: "test title",
      price: 35,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({
      title: "test title 2",
      price: 35,
    })
    .expect(401);
});

it("returns a 400 if the user provides an invalid title or price inputs.", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title: "test title",
      price: 3,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({
      title: "",
      price: 3,
    })
    .expect(400);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({
      title: "test title",
      price: -3,
    })
    .expect(400);
});

it("updates the ticket provided with valid title and price inputs.", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", cookie)
    .send({
      title: "test title",
      price: 3,
    });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "test title 2",
      price: 5,
    })
    .expect(200);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send();

  expect(ticketResponse.body.title).toEqual("test title 2");
  expect(ticketResponse.body.price).toEqual(5);
});
