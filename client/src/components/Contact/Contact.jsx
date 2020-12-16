import React, { useEffect, useState } from 'react';
import icon_linkedin from '../../assets/Icone LinkedinSVG.svg'
import icon_instagram from '../../assets/Icone InstaSVG.svg'
import icon_email from '../../assets/Icone e-mailSVG.svg'
import icon_adress from '../../assets/Icone enderecoSVG.svg'
import icon_ball from '../../assets/Grupo 6SVG.svg'
import icon_lines from '../../assets/Grupo 5SVG.svg'

import './styles/Contact.css'
import './styles/responsive.css'
import '../Input'

import Input from '../Input';
import axios from 'axios';
import url from '../../global/globalVars';

function Contact() {
    const [service, setService] = useState('');
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [message, setMessage] = useState('');

    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [emailAdress, setEmailAdress] = useState('');
    const [adress, setAdress] = useState('');

    const [services, setServices] = useState([]);

    function getLastArrayelement(url, separator) {

        const arr = url.split(separator);
        const v1 = arr[arr.length - 1];
        const v2 = arr[arr.length - 2];

        if (v1 === "") {
            // const url_encoded = encodeURIComponent(v2);
            const url_decoded = decodeURIComponent(v2);
            return url_decoded;
        }
        else {
            // const url_encoded = encodeURIComponent(v1);
            const url_decoded = decodeURIComponent(v1);
            return url_decoded;
        }
        

        // return v1 === "" ? v2 : v1;
    }

    async function loadServices() {
        const res = await axios.get(`${url}/api/ourservices`)
        setServices(res.data);
    }

    async function loadContacts() {
        const res = await axios.get(`${url}/api/contact`);
        // const validation_instagram = /^\s*(http\:\/\/)?instagram\.com\/[a-z\A-Z\d\-]{1,255}\s*$/;
        setLinkedin(res.data[0].linkedinLink);
        setInstagram(res.data[0].instagramLink);
        setEmailAdress(res.data[0].email);
        setAdress(res.data[0].adress);
    }

    useEffect(() => {
        loadContacts();
        loadServices();
    }, [])

    return (
        <section id="contact-section">
            <form>
                <fieldset>
                    <h2>Fale conosco</h2>

                    <div className="input-items">
                        <div className="name-telephone-container">
                            <Input 
                                name="name" 
                                placeholder="Nome" 
                                width="180px" 
                                value={name}
                                funcOnChange={(e) => { setName(e.target.value);}}  
                            />

                            <Input 
                                name="telephone" 
                                placeholder="Telefone" 
                                width="180px"
                                value={telephone}
                                funcOnChange={(e) => {setTelephone(e.target.value)}}
                            />
                        </div>

                        <Input name="email" placeholder="Email" width="100%" marginTop="30px" value={emailContact} 
                            funcOnChange={(e) => {setEmailContact(e.target.value)}}
                        />

                        <div className="input-line-container">        
                            <select  name="services" placeholder="Serviços" onChange={(e) => {setService(e.target.value);} }>
                                <option key="servicos" hidden>Serviços</option>
                                {services.map(service_it => {
                                    return <option key={service_it.title} value={service_it.title}>{service_it.title}</option>
                                })}
                                
                            </select>

                            <div className="white-line"></div>
                        </div>

                        <div className="input-line-container">
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensagem"
                                onChange={(e) => { setMessage(e.target.value) }}
                            />    
                            <div className="white-line"></div>
                        </div>
                    </div>

                    <button type="submit">Enviar</button>
                </fieldset>
            </form>

            <div className="links-section">
                <h2>Entre em contato</h2>

                <div className="link-image-container">
                    <img src={icon_linkedin} alt="linkedin"/>
                    <a target="blank" href={linkedin}>{getLastArrayelement(linkedin, '/')}</a>
                </div>
                <div className="link-image-container">
                    <img src={icon_instagram} alt="instagram"/>
                    <a target="blank" href={instagram}>{`@${getLastArrayelement(instagram, '/')}`}</a>
                </div>
                <div className="link-image-container">
                    <img src={icon_email} alt="email"/>
                    <a target="blank" href={`mailto:${emailAdress}`}>{emailAdress}</a>
                </div>
                <div className="link-image-container">
                    <img src={icon_adress} alt="endereço"/>
                    <a target="blank" href={`https://maps.google.com/?q=1200 ${adress}`}>{adress}</a>
                </div>
            </div>

            <img src={icon_ball} alt="ball" id="ball-form"/>
            <img src={icon_lines} alt="lines" id="lines-form"/>
        </section>
    );
}

export default Contact;