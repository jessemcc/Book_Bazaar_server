/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("books").del();
  await knex("books").insert([
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Arm Balance Black",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-arm-balance-black.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Meditation Tree Black",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-meditation-tree-black.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Meditation All Seasons Black",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image:
        "./public/images/books/iam-yoga-NB-meditation-all-seasons-black.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Arm Balance Gold",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-arm-balance-gold.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Meditation All Seasons Gold",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-meditation-all-season-gold.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Tree Pose Black",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-tree-pose-black.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Dancer Gold",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-dancer-gold.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Back Bend Black",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-back-bend-black.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Meditation Tree Gold",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-meditation-tree-gold.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
    {
      author_id: 1,
      book_name: "IAM Yoga Notebook - Back Bend Gold",
      description:
        "A beautifully crafted yoga notebook with minimalist design that will help you keep track of all your thoughts, ideas, and yoga sequences for all your well designed yoga classes. It can be used as a diary, a notebook, a journal, or a planner and can be purchased for people of all ages, including children, teens, and adults. Also makes a great gift for others. I AM that I AM.",
      language: "english",
      genre: "Notebook",
      image: "./public/images/books/iam-yoga-NB-back-bend-gold.jpg",
      price: 8.88,
      stock: 20,
      page_numbers: 120,
    },
  ]);
};
