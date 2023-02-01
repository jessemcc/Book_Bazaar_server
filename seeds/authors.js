/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("authors").del();
  await knex("authors").insert([
    {
      name: "Michelle Dover",
      about:
        "Hi, I'm Michelle Dover, a writer based in Ottawa, Ontario. Writing has always been a hobby of mine and I'm grateful to be able to share my passion with others. My focus is on writing books about yoga and meditation, topics that have greatly impacted my life. When I'm not writing, I enjoy practicing yoga and meditation to stay inspired. Thank you for taking the time to learn a bit about me!",
      image: "./public/assets/images/display/michelle_dover.jpg",
      number_of_books: 10,
    },
  ]);
};
