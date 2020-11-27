const keystone = require('keystone');

const { Types } = keystone.Field;

// First we create the Banner list.
const Banner = new keystone.List('Banner', {
  map: { name: 'title' },
});

// Then we are going to add the fields to our list.
Banner.add({
  title: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  description: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  image: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
  }

});

Banner.register();