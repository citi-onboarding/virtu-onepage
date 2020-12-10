import React from 'react';
import icon_linkedin from '../../assets/Icone LinkedinSVG.svg'
import icon_instagram from '../../assets/Icone InstaSVG.svg'
import icon_email from '../../assets/Icone e-mailSVG.svg'
import icon_adress from '../../assets/Icone enderecoSVG.svg'
import icon_ball from '../../assets/Grupo 6SVG.svg'
import icon_lines from '../../assets/Grupo 5SVG.svg'

import './Contact.css'

function Contact() {
  return (
    <div id="contact-section">
        <form>
            <fieldset>
                <legend>Fale conosco</legend>

                <div className="input-items">
                    <div className="name-telephone-container">
                        <div className="input-line-container">
                            <input type="text" placeholder="Nome" name="name" id="name"/>
                            <div className="white-line"></div>
                        </div>

                        <div className="input-line-container">
                            <input type="text" name="telephone" placeholder="Telefone"/>
                            <div className="white-line"></div>
                        </div>
                    </div>

                    <div className="input-line-container">
                        <input type="text" name="email" placeholder="Email"/>
                        <div className="white-line"></div>
                    </div>

                    <div className="input-line-container">        
                        <select name="services" id="services">
                            <option value="" disabled hidden>Serviço</option>
                        </select>
                        <div className="white-line"></div>
                    </div>

                    <div className="input-line-container">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensagem"></textarea>    
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
                <a href="#">.../company/virtu-consultoriapolitica</a>
            </div>
            <div className="link-image-container">
                <img src={icon_instagram} alt="instagram"/>
                <a href="#">@virtupolitica</a>
            </div>
            <div className="link-image-container">
                <img src={icon_email} alt="email"/>
                <a href="#">virtu@email.com</a>
            </div>
            <div className="link-image-container">
                <img src={icon_adress} alt="endereço"/>
                <a href="#">Av. Professor Luiz Freire, Cidade Universitaria, CFCH, Recife - PE</a>
            </div>
        </div>

        <img src={icon_ball} alt="ball" id="ball-form"/>
        <img src={icon_lines} alt="lines" id="lines-form"/>
    </div>
  );
}

export default Contact;