import React, { useEffect, useState } from 'react';
import CardService from '../CardService';
import tasks from '../../assets/tasks 1.svg';
import tasks_white from '../../assets/tasks 1 white.svg';
import group_focal from '../../assets/education 1SVG.svg';
import information from '../../assets/information 1SVG.svg';
import conference from '../../assets/conference 1SVG.svg';
import building1 from '../../assets/building 1SVG.svg';
import building2 from '../../assets/building 2SVG.svg';
import contract from '../../assets/contract 1SVG.svg';
import url from '../../global/globalVars';
import axios from 'axios';

import './styles/OurServices.css';
import './styles/responsive.css';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function OurServices() {

    const [services, setServices] = useState([]);
    async function loadServices() {
        const res = await axios.get(`${url}/api/ourservices`)
        setServices(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        loadServices();
    }, []);

    return (
        <div className="our-services-section">
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
                        (
                            <div className="red-section-bottom">
                                <CardService
                                    title={service.title}
                                    description={service.description}
                                    image={service.image[0].url}
                                    textColor="white"
                                    borderColor="white"
                                    bckColor="#D55140"
                                    id="white-card"
                                />
                            </div> 
                        )

                );
            })}
            
            {/* <CardService
                title="Pesquisa de Opinião"
                description={lorem}
                image={tasks}
                bckColor="white"
            />
            <CardService
                title="Grupo focal"
                description={lorem}
                image={group_focal}
                bckColor="white"
            />

            <CardService
                title="Memorandum"
                description={lorem}
                image={information}
                bckColor="white"
            />
            <CardService
                title="Consultoria de campanha"
                description={lorem}
                image={conference}
                bckColor="white"
            />
            <CardService
                title="Fortalecimento Institucional"
                description={lorem}
                image={building1}
                bckColor="white"
            />

        
            <CardService
                title="Acomp. dos poderes"
                description={lorem}
                image={contract}
                bckColor="white"
            />
            <CardService
                title="Capacitação Institucional"
                description={lorem}
                image={building2}
                bckColor="white"
            />

            <div className="red-section-bottom">
                <CardService
                    title="Pesquisa de Opinião"
                    description={lorem}
                    image={tasks_white}
                    textColor="white"
                    borderColor="white"
                    bckColor="#D55140"
                    id="white-card"
                />
            </div>*/}
        </div>
    );
}

export default OurServices;