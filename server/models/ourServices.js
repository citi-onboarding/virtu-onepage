const keystone = require('keystone');
const { Types } = keystone.Field;

const ourServices = new keystone.List('Servicos', {
	map: { name: 'title' }
  });


ourServices.add({
	image: {
		type: Types.CloudinaryImages,
		require: true, 
		index: true, 
		initial: true,
	},
	title: {
		type: Types.Text,
		required: true,
		index: true,
		initial: true,
	},
	description: {
		type: Types.Textarea,
		require: true,
		index: true,
		initial: true,
	},
});

ourServices.register();