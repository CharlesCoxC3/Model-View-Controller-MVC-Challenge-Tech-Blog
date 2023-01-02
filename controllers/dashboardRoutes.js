const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


// get all blogs
// router.get('/', async (req, res) => { 
//   try {
//       const blogData = await Blog.findAll();
//       const blogs = blogData.map(blog => blog.toJSON());
//       // render to 
//       res.status(200).render('/', { blogs });
     
//       } catch (err) {
//       res.status(500).json(err);
//       }
// });



router.get('/editBlog/:id', withAuth, async (req, res) => {
  
  try {
      const updateBlog = await Blog.findByPk(req.params.id);
      console.log(updateBlog);

      if (updateBlog) {
  
        const blog = updateBlog.get({ plain: true });

        res.render('editBlog', {
          ...blog,
          logged_in: true
        });
      }
      // res.status(200).json(updateBlog);
  } catch (e) {
      console.log(e);
      res.status(500).json(e);

  }
});





module.exports = router;