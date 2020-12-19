const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');
const OurServices = keystone.list('Servicos')
const Contact = keystone.list('Contato');
const Banner = keystone.list('Banner');

require('dotenv').config();

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', (req, res) => {
    Post.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });

  app.get('/api/ourservices', (req, res) => {
    OurServices.model.find((err, data) => {
      if (err) return res.apiError('database error', err);
      res.send(data);
    });
  });

  app.get('/api/contact', (req, res) => {
    Contact.model.find((err, data) => {
      if (err) return res.apiError('database error', err);
      res.send(data);
    });
  });

  app.post('/api/makecontact', async (req, res) => {

    const { name, telephone, email, service, message } = req.body;
   
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: process.env.EMAIL_FROM, 
        pass: process.env.PASSWORD, 
      },
    });
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_TO, 
        to: process.env.EMAIL_TO, 
        subject: 'Novo contato de cliente', 
        html: `<p> Nome: ${name} </p>
              <p> Telefone: ${telephone} </p>
              <p> Email: ${email} </p>
              <p> Serviço: ${service} </p>
              <p> Mensagem: ${message} </p>`,
      });
  
      res.status(200).send('enviado');
    }
    catch(err) {
      res.status(505).send('Algo deu errado')
      console.log(err);
    }
  })

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};