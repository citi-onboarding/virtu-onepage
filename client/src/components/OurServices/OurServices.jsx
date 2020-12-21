import React, { useEffect, useState } from 'react';
import CardService from '../CardService';
import url from '../../global/globalVars';
import axios from 'axios';
import line_5 from '../../assets/Caminho 5 rotate-right.png'
import img_test from '../../assets/background.png'

import './styles/OurServices.css';
import './styles/responsive.css';

function OurServices() {

    const [services, setServices] = useState([]);
    async function loadServices() {
        const res = await axios.get(`${url}/api/ourservices`)
        setServices(res.data);
    }

    useEffect(() => {
        loadServices();
    }, []);

    return (
        <section id="ourServices">
            <div className="red-section-top">
                <h1>Saiba quais serviços que nós oferecemos</h1>
            </div>

            {services.map((service, index) => {
                return (
                    (index+1 !== services.length) ?
                        (<CardService
                            title={service.title}
                            description={service.description}
                            image={service.image[0].url}
                            bckColor="white"
                        />)
                    :
                        (<div className="red-section-bottom">
                                <CardService
                                    title={service.title}
                                    description={service.description}
                                    image={service.image[0].url}
                                    textColor="white"
                                    borderColor="white"
                                    bckColor="#D55140"
                                    id="white-card"
                                />
                        </div>)

                        );
            })}
            
            <img src={line_5} alt="caminho" className="line_5"/>
        </section>
    );
}

export default OurServices;