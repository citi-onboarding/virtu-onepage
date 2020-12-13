const keystone = require('keystone');
const { Types } = keystone.Field;

const Contact = new keystone.List('Contato');

Contact.add ({
	instagramLink: {
		type: Types.Url, required: true, index: true, initial: true, 
	},
    	linkedinLink: {
		type: Types.Url, required: true, index: true, initial: true, 
	},
    	email: {
		type: Types.Text, required: true, index: true, initial: true,
	},
    	adress: {
		type: Types.Text, initial: true, required: true, index: true,
		}
});

Contact.register();