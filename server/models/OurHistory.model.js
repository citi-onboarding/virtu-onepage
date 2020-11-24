const keystone = require('keystone');

const { Types } = keystone.Field;

const OurHistory = new keystone.List('QuemSomos')

OurHistory.add({
    vision: {
        type: Types.Text,
        required: true,
        initial: true,
    },
    mission: {
        type: Types.Text,
        required: true,
        initial: true,
    },
    value: {
        type: Types.Text,
        required: true,
        initial: true,
    },
    know_our_history: {
        type: Types.Text,
        required: true,
        initial: true,
    }
})

OurHistory.register();