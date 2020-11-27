const keystone = require('keystone');

const { Types } = keystone.Field;

const OurHistory = new keystone.List('QuemSomos')

OurHistory.add({
    Visao: {
        type: Types.Text,
        required: true,
        initial: true,
    },
    Missao: {
        type: Types.Text,
        required: true,
        initial: true,
    },
    Valores: {
        type: Types.Text,
        required: true,
        initial: true,
    },
    NossaHistoria: {
        type: Types.Text,
        required: true,
        initial: true,
    }
})

OurHistory.register();