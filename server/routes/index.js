const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');
const Banner = keystone.list('Banner');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', (req, res) => {
    Post.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });


app.get('/api/Banner', (req, res) =>{
    Banner.model.find((err, data) =>{
      if (err) return res.apiError('database error', err);
      res.send(data);
    });
});

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};