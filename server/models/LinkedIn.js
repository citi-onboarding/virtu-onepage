const keystone = require('keystone');

const { Types } = keystone.Field;

const LinkedIn = new keystone.List('LinkedIn', {
  map: { name: 'titlePost' },
});

LinkedIn.add({
  linkProfile: {
    type: Types.Url, require: true, initial: true,
  },
  titlePost: {
    type: Types.Text, required: true, initial: true,
  },
  description: {
    type: Types.Text, require: true, initial: true,
  },
  link: {
    type: Types.Url, require: true, initial: true,
  },
});

LinkedIn.register();
