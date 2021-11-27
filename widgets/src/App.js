import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'

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
    return (
        <div>
            <Search/>
            <p>
                <Accordion items ={items}/>
            </p>
        </div>
        )

}