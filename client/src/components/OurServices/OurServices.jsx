import React from 'react';
import CardService from '../CardService'
import tasks from '../../assets/tasks 1.svg'
import tasks_white from '../../assets/tasks 1 white.svg'

import './OurServices.css'

function OurServices() {
    return (
        <div className="our-services-container">
            <div className="red-section-top">
                <h1>Saiba quais serviços que nós oferecemos</h1>
            </div>

            <div className="card-s>ervices-container-top">
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
            </div>

            <div className="card-services-container2-center">
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
            </div>

            <div className="card-services-container-bottom">
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
            </div>
            
            <div className="red-section-bottom">
                <CardService
                    title="Pesquisa de Opinião"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image={tasks_white}
                />
            </div>
        </div>
    );
}

export default OurServices;