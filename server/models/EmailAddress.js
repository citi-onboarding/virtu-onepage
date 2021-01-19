const keystone = require('keystone');
const { Types } = keystone.Field;

const EmailAddress = new keystone.List('EndereçoEmail');

EmailAddress.add ({
	emailAddress: {
		type: Types.text,			
    },
    emailPassword:{
        type: Types.text,
    }
});

EmailAddress.register();