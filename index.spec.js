const request = require("supertest");

const server = require("./api/server");

describe("server.js", () => {
  describe("/ route", () => {
    it("should return status code 200", () => {
      request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should also return status code 200", async () => {
      const response = await request(server).get("/");

      expect(response.status).toBe(200);
    });
    it("should return JSON", async () => {
      const response = await request(server).get("/");

      expect(response.type).toBe("application/json");
    });
    it('should return with a body like {message: "Welcome, API up!"}', async () => {
      const expected = { message: "Welcome, API up!" };
      const response = await request(server).get("/");

      expect(response.body).toEqual(expected);
    });
  });
  describe("/greet route", () => {
    it("should greet the person", async () => {
      const body = { firstname: "Peter", lastname: "Pham" };
      const expected = { hello: "Peter Pham" };

      const response = await request(server)
        .post("/greet")
        .send(body);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expected);
    });
  });
});
