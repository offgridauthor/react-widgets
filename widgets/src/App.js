import React, {useState} from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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

const options = [
    {
        label: 'Redness',
        value: 'red'
    },
    {
        label: 'blueness',
        value: 'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>

            <Dropdown options={options}
            onSelectedChange={setSelected}
            selected={selected}
            />
            <Search/>
            <p>
                <Accordion items ={items}/>
            </p>
        </div>
        )

}