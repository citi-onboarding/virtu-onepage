const keystone = require('keystone');

const { Types } = keystone.Field;

const ourHistory = new keystone.List('ourHistory')

ourHistory.add({
    vision: {
        type: Types.Text,
        required: true,
        index: true,
    },
    mission: {
        type: Types.Text,
        required: true,
        index: true,
    },
    value: {
        type: Types.Text,
        required: true,
        index: true,
    },
    know_our_histpry: {
        type: Types.Text,
        required: true,
        index: true,
    }
})

ourHistory.register();