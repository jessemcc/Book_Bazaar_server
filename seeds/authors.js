/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("authors").del();
  await knex("authors").insert([
    {
      first_name: "Michelle",
      last_name: "Dover",
      email: "michelle.dover@gmail.com",
      address: "123 Fake St.",
      city: "Ottawa",
      province: "Ontario",
      postal_code: "K1V 5D5",
      password: "zxc123",
      about:
        "Hi, I'm Michelle Dover, a writer based in Ottawa, Ontario. Writing has always been a hobby of mine and I'm grateful to be able to share my passion with others. My focus is on writing books about yoga and meditation, topics that have greatly impacted my life. When I'm not writing, I enjoy practicing yoga and meditation to stay inspired. Thank you for taking the time to learn a bit about me!",
      image: "./public/assets/images/display/michelle_dover.jpg",
      number_of_books: 10,
    },
    {
      first_name: "Joe",
      last_name: "Mafroush",
      email: "joe.mafroush@gmail.com",
      address: "6145 Cedar Blvd.",
      city: "Toronto",
      province: "Ontario",
      postal_code: "L2I 4H8",
      password: "mnb098",
      about:
        "Hi, I'm Joe Mafroush, a new author on the literary scene. I'm passionate about writing and have been honing my craft for several years. My writing style is often described as atmospheric, with a focus on character development and evocative language. I'm inspired by the beauty of nature, the complexities of human relationships, and the journey of self-discovery. My goal as a writer is to transport my readers to new worlds, to leave them with a sense of wonder, and to touch their hearts with my words. I can't wait for you to read my stories and join me on this exciting journey.",
      image: "./public/assets/images/display/joe_mafroush.jpg",
      number_of_books: 3,
    },
    {
      first_name: "Rita",
      last_name: "Onuoha",
      email: "rita.onuoha@gmail.com",
      address: "427 Caleb Avenue",
      city: "Montreal",
      province: "Ontario",
      postal_code: "P2J 8D6",
      password: "asd123",
      about:
        "Hi there! I'm Rita Onuoha, a new and enthusiastic author. I have a love for storytelling and a passion for bringing characters and their experiences to life. My writing is emotional, captivating, and thought-provoking. I believe in using my words to inspire, heal, and ignite change. I can't wait to share my stories with the world and connect with readers who appreciate the power of literature. Join me on this exciting journey as we delve into the depths of the human experience.",
      image: "./public/assets/images/display/rita_onuoha.jpg",
      number_of_books: 5,
    },
  ]);
};
