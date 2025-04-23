import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    homeTitle: "RIGA",
    homeText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolor dicta? Praesentium tempora quas rem voluptatibus officia facilis mollitia, in quidem veniam molestiae nostrum alias fugiat nihil repudiandae iste at. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit magnam animi dolor sapiente eum rerum molestiae maxime. Pariatur eum eligendi modi! Laudantium ratione ullam dignissimos. Ullam dicta sequi maxime ut!",
    aboutText:
      "Hello! Riga Design is a brand based in Guadalajara, Mexico, inspired by the vibrant colors and rich textures of cities around the world. My mission is to bring you unique, handcrafted pieces that allow you to wear or showcase a fragment of the world’s beauty in your everyday life. Whether you choose to adorn yourself or your home, Riga Design lets you carry a limited edition piece with you wherever you go. The creator Marisela Fierro is a multifaceted visual artist and Art Educator with a passion for exploring the interplay between form and material. Her work seamlessly blends minimalist aesthetics with organic elements, creating a style that is both refined and dynamic. Marisela’s creative process is driven by a curiosity to push the boundaries of traditional design, resulting in pieces that are not only visually striking but also thought-provoking. Her dedication to craftsmanship and her innovative approach to art and design invite viewers to engage with her work on a deeper, more personal level. Web page: https://mariselafierro.netlify.app/ ",
    faqs: [
      "EARRING MATERIALS",
      "Riga Design earrings are hand-stitched from Japanese glass beads, nylon thread, and sterling silver ear wires unless otherwise state.",
      "PRINTS MATERIALS",
      "High-quality Giclée print on 200gsm natural fiber paper unless otherwise state.",
      "CARE INSTRUCTIONS",
      "For the safest keeping, please store your earrings by either hanging or laying flat in a cool, dry place. While traveling feel free to re-use the case or box that your earrings came in.",
      "REPAIRS + REPLACEMENTS",
      "If an earring becomes damaged, please contact me and I will be happy to fix the earring for minimal cost. If you happen to lose an earring, no worries! I can replace it at cost (50% of the original pair price).",
      "RETURNS",
      "Riga Design is not currently accepting returns unless an item was considerably damaged during shipping. If you are unhappy with your purchase please reach out directly via marisela.fierro@gmail.com so we can work something out. ",
      "LOST PACKAGES",
      "Riga Design is not responsible for lost or stolen packages. You should receive an email with shipping notifications when your package is on the way. Please keep in mind shipping may currently be delayed due to international.",
    ],
    reviews: [
      {
        review:
          "**“Absolutely stunning craftsmanship! I purchased a pair of earrings and a print, and both pieces are exquisite. The attention to detail is incredible, and I love knowing that each item is handmade. Riga Design has become my go-to for unique, artisanal jewelry and decor!”**",
        author: "Alexandra Lancaster",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "**“I’ve never seen such a perfect blend of color and texture in jewelry before. The earrings I bought from Riga Design are not only beautiful but also lightweight and comfortable to wear all day. They add a pop of elegance to any outfit!”**",
        author: "Isabel Placencia",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "**“Riga Design's prints are a wonderful way to bring a touch of global artistry into my home. The colors are vibrant, and the quality of the paper is fantastic. I’ve already received so many compliments on the piece I hung in my living room!”**",
        author: "Geronima Gonzalez",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "**“The earrings from Riga Design are truly wearable art. Each piece tells a story, and I love that they are inspired by different cities around the world. The craftsmanship is impeccable, and they make me feel special every time I wear them.”**",
        author: "Anita Arroyo",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "**“I am so impressed by the quality and uniqueness of Riga Design’s products! The combination of contemporary design with traditional craftsmanship is amazing. Whether it’s a pair of earrings or a print, every piece feels like a little treasure.”**",
        author: "Mara H",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
    ],
  },
  reducers: {},
});

export default textSlice.reducer;
