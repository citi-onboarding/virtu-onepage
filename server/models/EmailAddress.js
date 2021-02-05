const keystone = require('keystone');
const { Types } = keystone.Field;

const EmailAddress = new keystone.List('Endereço Email');

EmailAddress.add ({
	emailAddress: {
        type: Types.Text, required: true, initial: true,		
    },
    emailPassword:{
        type: Types.Text, required: true, initial: true,
    },
});

EmailAddress.register();