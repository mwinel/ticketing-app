import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful ticket creation with valid inputs.", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.status).not.toEqual(404);
});

it("can only be accessed if the user is signed in.", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it("returns an error if an invalid title is provided.", async () => {});

it("returns an error if an invalid price is provided.", async () => {});
