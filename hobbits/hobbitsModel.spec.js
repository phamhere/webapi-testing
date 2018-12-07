const hobbits = require("./hobbitsModel");

const db = require("../data/dbConfig");

beforeEach(async () => {
  await db("hobbits").truncate();
});

describe("hobbits model", () => {
  it("should insert provided hobbit", async () => {
    // make sure the test record is not in db
    const rows = await db("hobbits").where({ name: "Sam" });
    expect(rows).toHaveLength(0);
    // insert a test record
    await hobbits.insert({ name: "Sam" });
    // make sure test test record is in the db
    rows = await db("hobbits").insert({ name: "Sam" });
    expect(rows).toHaveLength(1);
  });
  it("should update a record", () => {
    // insert a record
    // update the record by id
    // check record was updated
  });
});
