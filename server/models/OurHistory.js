const keystone = require('keystone');

const { Types } = keystone.Field;

const ourHistory = new keystone.List('Quem Somos', {
    map: { name: 'Visao' }
  });


ourHistory.add({
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

ourHistory.register();