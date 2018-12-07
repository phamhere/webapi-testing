const db = require("../data/dbConfig");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit);

  return db("hobbits")
    .where({ id })
    .first();
}
