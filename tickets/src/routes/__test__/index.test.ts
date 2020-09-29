import request from "supertest";
import { app } from "../../app";

const createTicket = () => {
  return request(app).post("/api/v1/tickets").set("Cookie", global.signin()).send({
    title: "test title",
    price: 5,
  });
};

it("returns a list of tickets.", async () => {
  await createTicket();
  await createTicket();

  const response = await request(app).get("/api/v1/tickets").send().expect(200);

  expect(response.body.length).toEqual(2);
});
