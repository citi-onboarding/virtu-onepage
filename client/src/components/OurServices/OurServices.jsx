import React from 'react';
import CardService from '../CardService'
import tasks from '../../assets/tasks 1.svg'
import tasks_white from '../../assets/tasks 1 white.svg'
import group_focal from '../../assets/education 1.png'

import './OurServices.css'

function OurServices() {
    return (
        <div className="our-services-container">
            <div className="red-section-top">
                <h1>Saiba quais serviços que nós oferecemos</h1>
            </div>
            
                <CardService
                    title="Pesquisa de Opinião"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={tasks}
                />
                <CardService
                    title="Grupo focal"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={group_focal}
                />

                <CardService
                    title="Pesquisa de Opinião"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={tasks}
                />
                <CardService
                    title="Pesquisa de Opinião"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={tasks}
                />
                <CardService
                    title="Pesquisa de Opinião"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={tasks}
                />

            
                <CardService
                    title="Pesquisa de Opinião"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={tasks}
                />
                <CardService
                    title="Pesquisa de Opinião"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={tasks}
                />

                <div className="red-section-bottom">
                    <CardService
                        title="Pesquisa de Opinião"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image={tasks_white}
                        textColor="white"
                        borderColor="white"
                    />
                </div>            
        </div>
    );
}

export default OurServices;