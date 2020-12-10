import React from 'react';
import icon_linkedin from '../../assets/Icone LinkedinSVG.svg'
import icon_instagram from '../../assets/Icone InstaSVG.svg'
import icon_email from '../../assets/Icone e-mailSVG.svg'
import icon_adress from '../../assets/Icone enderecoSVG.svg'

import './Contact.css'

function Contact() {
  return (
    <div id="contact-section">
        <form>
            <fieldset>
                <legend>Fale conosco</legend>
                <div className="name-telephone">
                    <input type="text" placeholder="Nome" name="name" id="name"/>
                    <input type="text" name="telephone" placeholder="Telefone"/>
                </div>

                <input type="text" name="email" id="email"/>
                <select name="services" id="services">
                    <option value="" disabled hidden >Serviço</option>

                </select>

                <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensagem"></textarea>

                <button type="submit">Enviar</button>
            </fieldset>
        </form>

        {/* <div className="links-section">
            <h2>Entre em contato</h2>

            <ul>
                <li>
                    <img src={icon_linkedin} alt="linkedin"/>
                    <a href="#">.../company/virtu-consultoriapolitica</a>
                </li>
                <li>
                    <img src={icon_instagram} alt="instagram"/>
                    <a href="#">@virtupolitica</a>
                </li>
                <li>
                    <img src={icon_email} alt="email"/>
                    <a href="#">virtu@email.com</a>
                </li>
                <li>
                    <img src={icon_adress} alt="endereço"/>
                    <a href="#">Av. Professor Luiz Freire, Cidade Universitaria, CFCH, Recife - PE</a>
                </li>
            </ul>
        </div> */}
    </div>
  );
}

export default Contact;