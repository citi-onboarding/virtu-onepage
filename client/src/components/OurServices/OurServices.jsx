import React from 'react';
import CardService from '../CardService'
import tasks from '../../assets/tasks 1.svg'
import tasks_white from '../../assets/tasks 1 white.svg'
import group_focal from '../../assets/education 1SVG.svg'

import './OurServices.css'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function OurServices() {
    return (
        <div className="our-services-container">
            <div className="red-section-top">
                <h1>Saiba quais serviços que nós oferecemos</h1>
            </div>
            
                <CardService
                    title="Pesquisa de Opinião"
                    description={lorem}
                    image={tasks}
                />
                <CardService
                    title="Grupo focal"
                    description={lorem}
                    image={group_focal}
                />

                <CardService
                    title="Memorandum"
                    description={lorem}
                    image={tasks}
                />
                <CardService
                    title="Consultoria de campanha"
                    description={lorem}
                    image={tasks}
                />
                <CardService
                    title="Fortalecimento Institucional"
                    description={lorem}
                    image={tasks}
                />

            
                <CardService
                    title="Acomp. dos poderes"
                    description={lorem}
                    image={tasks}
                />
                <CardService
                    title="Capacitação Institucional"
                    description={lorem}
                    image={tasks}
                />

                <div className="red-section-bottom">
                    <CardService
                        title="Pesquisa de Opinião"
                        description={lorem}
                        image={tasks_white}
                        textColor="white"
                        borderColor="white"
                    />
                </div>            
        </div>
    );
}

export default OurServices;