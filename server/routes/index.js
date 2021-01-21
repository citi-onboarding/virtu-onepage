const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Post = keystone.list('Posts');
const Testimonial = keystone.list('Depoimentos');
const OurServices = keystone.list('Servicos')
const Contact = keystone.list('Contato');
const OurHistory = keystone.list('Quem Somos');
const Banner = keystone.list('Banner');
const Linkedin = keystone.list('LinkedIn');

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

  app.get('/api/OurHistory', (req, res) =>{
    OurHistory.model.find((err, data) =>{
      if (err) return res.apiError('database error', err);
      res.send(data);
    });
  });
  
  app.get('/api/testimonial', (req, res) =>{
    Testimonial.model.find((err, data) =>{
      if (err) return res.apiError('database error', err);
      res.send(data);
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

  app.get('/api/Banner', (req, res) =>{
    Banner.model.find((err, data) =>{
      if (err) return res.apiError('database error', err);
      res.send(data);
    });
  });

  app.get('/api/linkedin', (req, res) =>{
    Linkedin.model.find((err, data) =>{
      if (err) return res.apiError('database error', err);
      res.send(data);
    });
  });

  app.post('/api/makecontact', async (req, res) => {

    const { name, telephone, email, service, message } = req.body;
    let data_contact;
    Contact.model.find((err, data) => {
      if (err) {
        console.log('dei erro');
        return;
      }
      data_contact = data;
      console.log(data_contact);
    })
   
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
        from: process.env.EMAIL_FROM, 
        to: data_contact.email_make_contact, 
        subject: 'Novo contato de cliente', 
        html: `<p> Nome: ${name} </p>
              <p> Telefone: ${telephone} </p>
              <p> Email: ${email} </p>
              <p> Serviço: ${service} </p>
              <p> Mensagem: ${message} </p>`,
      });
  
      res.status(200).send('Enviado');
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