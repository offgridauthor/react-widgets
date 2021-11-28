import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', () => {
                setOpen(false); // body clicked
            }, {capture: true}
        )
    }, [])//empty array = only run once

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return (
                <div key={option.value} className="item"
                     onClick={() => onSelectedChange(option)}
                >
                    <i className="ae flag"></i>
                    {option.label}
                </div>
            )
        }

// item clicked
        return (
            <div key={option.value} className="item"
                 onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    })

//ref.current
    return (

        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">SELECT A COLOR</label>
                <div onClick={() => setOpen(!open)}
                     className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    ) // dropdown click
}

export default Dropdown