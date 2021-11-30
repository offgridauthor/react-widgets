import React, {useState} from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from "./components/Translate";

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

const showAccordion = () => {

    if(window.location.pathname === '/') {
        return <Accordion />
    }
}


export default () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {showAccordion}
            <Translate/>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
            {showDropdown ?
                <Dropdown options={options}
                          onSelectedChange={setSelected}
                          selected={selected}
                /> : null
            }
            <Search/>
            <p>
                <Accordion items={items}/>
            </p>
        </div>
    )

}