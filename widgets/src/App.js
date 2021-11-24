import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'just some frontend framework'
    },
    {
        title: 'Why use that thing?',
        content: 'because everybody is jumping off cliffs'
    }

]


export default () => {
    return <h1><Accordion/></h1>
}