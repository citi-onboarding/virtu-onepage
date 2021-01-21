const keystone = require('keystone');
const { Types } = keystone.Field;

const Contact = new keystone.List('Contato');

Contact.add ({
	instagramLink: {
		type: Types.Url,
	},
	linkedinLink: {
		type: Types.Url,
	},
	email: {
		type: Types.Text,
	},
	adress: {
		type: Types.Text,
	},
	email_make_contact: {
		type: Types.Text,
	}
});

Contact.register();