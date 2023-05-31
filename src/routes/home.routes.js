const router = require("express").Router();
const Product = require("../models/product.model");

// GET /blog-posts
router.get("/", async (req, res) => {
  try {
    // const products = await Product.findAll();
    const products = [
      {
        image: "/images/bole_bulbula_mariyam.jpg",

        location: "Bole Bulbula, Mariyam Mazoriya",
      },
      {
        image: "/images/bulgariya.jpg",

        location: "Bulgariya",
      },
      {
        image: "/images/egziabher_ab_megenagna.jpg",

        location: "Megenagna, Egzihabher Ab",
      },
      {
        image: "/images/gerji_mebrat_hayil.jpg",

        location: "Gerji, Mebrat Hayil",
      },
      {
        image: "/images/meskel_flower.jpg",

        location: "Meskel Flower",
      },
    ];
    res.render("home/index", { products });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// // GET /new
// router.get("/new", (req, res) => {
//   res.render("blogs/new", { blog: new BlogPost() });
// });

// // GET /:id
// router.get("/:id", async (req, res) => {
//   try {
//     const blog = await BlogPost.findByPk(req.params.id);
//     if (!blog) {
//       res.status(404).send("Blog Post Not Found");
//     } else {
//       res.render("blogs/show", { blog });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // POST /
// router.post("/", async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const blog = await BlogPost.create({ title, content });

//     return res.redirect("/");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // GET /:id/edit
// router.get("/:id/edit", async (req, res) => {
//   try {
//     const blog = await BlogPost.findByPk(req.params.id);
//     if (!blog) {
//       res.status(404).send("Blog Post Not Found");
//     } else {
//       res.render("blogs/edit", { blog });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // PUT /:id
// router.put("/:id", async (req, res) => {
//   let blog;

//   try {
//     const blog = await BlogPost.findByPk(req.params.id);
//     const title = req.body.title;
//     const content = req.body.content;

//     if (!blog) {
//       res.status(404).send("Blog Post Not Found");
//     } else {
//       const updatedBlog = await blog.update({ title, content });
//       res.redirect(`/`);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // DELETE /blog-posts/:id
// router.delete("/:id", async (req, res) => {
//   console.log("Id :", req.params.id);
//   try {
//     const blog = await BlogPost.findByPk(req.params.id);
//     console.log("Blog :", blog);
//     if (!blog) {
//       res.status(404).send("Blog Post Not Found");
//     } else {
//       await blog.destroy();
//       res.redirect("/");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

module.exports = router;
