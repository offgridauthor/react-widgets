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
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}


const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search/>
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown/>
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate/>
    }
}


export default () => {
    const [selected, setSelected] = useState(options[0])
    const [revealDropdown, setRevealDropdown] = useState(true);

    return (
        <div>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
            <Translate/>
            <button onClick={() => setRevealDropdown(!revealDropdown)}>Toggle dropdown</button>
            {revealDropdown ?
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