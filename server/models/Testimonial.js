const keystone = require('keystone');
const { Types } = keystone.Field;

const Testimonial = new keystone.List('Depoimentos', {
	map: { name: 'title' }
  });


Testimonial.add({
	image: {
   		type: Types.CloudinaryImages, require: true, index: true, initial: true,
 		},
	title: {
		type: Types.Text, required: true, index: true, initial: true,
        },
    subtitle: {
        type: Types.Text, required: true, index: true, initial: true,
        },
    reason: {
        type: Types.Text, require: true, index: true, initial: true,
        },
	description: {
		type: Types.Textarea, require: true, index: true, initial: true,
		},
});

Testimonial.register();