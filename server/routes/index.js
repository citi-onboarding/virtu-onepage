const path = require('path');
const keystone = require('keystone');
const axios = require('axios')
const cors = require('cors');


const Post = keystone.list('Posts');
const Testimonial = keystone.list('Depoimentos');
const OurServices = keystone.list('Servicos')
const Contact = keystone.list('Contato');
const OurHistory = keystone.list('Quem Somos');
const Banner = keystone.list('Banner');
const Linkedin = keystone.list('LinkedIn');
const EmailAddress = keystone.list('Endereço Email');

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

  app.get('/api/emailaddress', (req, res) => {
    EmailAddress.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    });
  });
  
  app.post('/api/makecontact', async (req, res) => {

  const { name, telephone, email, service, message } = req.body;
    
  const[EmailAddress, setEmailAddress] = useState([])
     
  async function LoadEmailAddress() {
    const res = await axios.get('/api/EmailAddress')
    setEmailAddress(res.data)
    }
      const LoadEmailAddress = async () =>{
            const res = await axios.get('/api/EmailAddress')
            setEmailAddress(res.data)
          } 
      
          useEffect(()=>{
              LoadEmailAddress()
          }, [])

        {EmailAddress.map(emailInformation => {
            return  transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 587,
              secure: false, 
              auth: {
                user: process.emailInformation.emailAddress, 
                pass: process.emailInformation.emailPassword, 
              },
            });
        
        })}

    
    try {
      {EmailAddress.map(emailInformation => {
        return  await transporter.sendMail({
          from: process.emailInformation.emailAddress, 
          to: process.emailInformation.emailAddress, 
          subject: 'Novo contato de cliente', 
          html: `<p> Nome: ${name} </p>
                <p> Telefone: ${telephone} </p>
                <p> Email: ${email} </p>
                <p> Serviço: ${service} </p>
                <p> Mensagem: ${message} </p>`,
        });  
    
    })}
     
  
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
