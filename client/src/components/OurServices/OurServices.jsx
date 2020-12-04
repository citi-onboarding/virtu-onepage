import React from 'react';
import CardService from '../CardService'
import tasks from '../../assets/tasks 1.svg'
// import { Container } from './styles';

function OurServices() {
    return (
        <CardService
            title="Pesquisa de Opinião"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={tasks}
        />
    );
}

export default OurServices;