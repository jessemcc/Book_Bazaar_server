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
    {
      author_id: 2,
      book_name: "The World Today",
      description:
        "The World Today is a thought-provoking book that explores the interplay between society and the environment. It delves into the impact that human actions have on the planet, and the consequences of neglecting our responsibility to protect the earth. Through compelling narratives and insightful analysis, the author sheds light on the pressing issues facing the world today and offers a fresh perspective on the steps we can take to create a more sustainable future. This book is a must-read for anyone interested in understanding the complex relationship between humanity and the natural world.",
      language: "english",
      genre: "Non-fiction",
      image: "./public/images/books/the-world-today.jpg",
      price: 19.99,
      stock: 15,
      page_numbers: 256,
    },
    {
      author_id: 2,
      book_name: "Future Designs",
      description:
        "I'm the author of Future Designs, a book that takes a closer look at the future of the human population. I delve into the latest scientific research and make predictions about where we're headed as a species. From the impact of technology and demographics to the role of AI and climate change, I explore the challenges and opportunities that lie ahead. Join me on a journey into the future and see what the future holds for humanity.",
      language: "english",
      genre: "Non-fiction",
      image: "./public/images/books/future-designs.jpg",
      price: 19.99,
      stock: 25,
      page_numbers: 189,
    },
    {
      author_id: 2,
      book_name: "History of humankind",
      description:
        "History of Mankind is a fascinating book about the evolutionary journey of humankind. I cover the origins of our species and trace our development from early human ancestors to modern humans. Key events and milestones in human evolution are discussed, from the first tools and fire to the rise of civilizations and the scientific revolution. This book provides a comprehensive overview of our species' past and explores the events and factors that have shaped the world. A must-read for anyone interested in the evolutionary journey of humankind.",
      language: "english",
      genre: "Non-fiction",
      image: "./public/images/books/history-of-humankind.jpg",
      price: 19.99,
      stock: 20,
      page_numbers: 303,
    },
    {
      author_id: 3,
      book_name: "In the Shadows",
      description:
        "In the Shadows is a fast-paced thriller that follows the story of a new member being pursued by a mysterious and dangerous cult. With twists and turns at every page, this book takes you on a journey filled with suspense as the protagonist tries to uncover the truth behind the cult's nefarious intentions while trying to stay one step ahead of their relentless pursuit. Get ready to be on the edge of your seat as you delve deeper into the shadows of this gripping and unpredictable thriller.",
      language: "english",
      genre: "Thriller",
      image: "./public/images/books/in-the-shadows.jpg",
      price: 21.99,
      stock: 30,
      page_numbers: 356,
    },
    {
      author_id: 3,
      book_name: "Past Revenge",
      description:
        "Past Revenge: A thriller about an up-and-coming author targeted by a mysterious figure from her past. As the attacks escalate, she races against time to uncover their identity and motives while also battling to protect herself and loved ones. Secrets from the past come to light as the protagonist fights for survival in this high-stakes, non-stop action novel.",
      language: "english",
      genre: "Thriller",
      image: "./public/images/books/past-revenge.jpg",
      price: 21.99,
      stock: 30,
      page_numbers: 287,
    },
    {
      author_id: 3,
      book_name: "No Time Left",
      description:
        "No Time Left: A thrilling novel about a woman trapped inside a company building under siege by a notorious terrorist group. As she battles to survive the horrors within, she must also outwit the terrorists and find a way to escape before time runs out. This heart-pumping novel takes readers on a journey filled with tension, fear, and the struggle for survival against impossible odds.",
      language: "english",
      genre: "Thriller",
      image: "./public/images/books/no-time-left.jpg",
      price: 21.99,
      stock: 30,
      page_numbers: 320,
    },
    {
      author_id: 3,
      book_name: "Gaia",
      description:
        "Gaia: A thrilling novel about a lonely man who joins what he thinks is a friendly environmentalist group, only to discover the true, dangerous extent of their methods. As he becomes embroiled in their fanatical quest to save the planet, he must navigate a web of lies and find a way to stop them before it's too late. This page-turner is a tense and unpredictable exploration of the consequences of blindly following a cause, no matter the cost.",
      language: "english",
      genre: "Thriller",
      image: "./public/images/books/gaia.jpg",
      price: 21.99,
      stock: 30,
      page_numbers: 401,
    },
    {
      author_id: 3,
      book_name: "Happiness Reigns",
      description:
        "Happiness Reigns: A thrilling novel about a world where the government enforces the use of happiness pills to keep the population content and compliant. Oliver decides to stop taking the drugs and uncovers the horrific acts committed by those under their influence. As the truth is revealed, Oliver must navigate a society in the grip of false happiness and fight to restore freedom of choice and end the reign of happiness. This thought-provoking thriller raises questions about the consequences of sacrificing individual freedoms for the illusion of happiness.",
      language: "english",
      genre: "Thriller",
      image: "./public/images/books/happiness-reigns.jpg",
      price: 21.99,
      stock: 30,
      page_numbers: 356,
    },
  ]);
};
