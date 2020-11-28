const keystone = require('keystone');

const { Types } = keystone.Field;

// First we create the Blog list.
const Blog = new keystone.List('Blog', {
  map: { name: 'title' },
});

// Then we are going to add the fields to our list.
Blog.add({
  title: {
    type: Types.Text, value: 'Conheça o nosso blog', required: true, initial: true,
  },
  description: {
    type: Types.Text, require: true, initial: true,
  },
  link: {
    type: Types.Url, require: true, initial: true,
  },
});

Blog.register();
