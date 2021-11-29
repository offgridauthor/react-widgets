import React, {useState} from 'react';
import Dropdown from "./Dropdown";

const options = [

    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    }
]


const Translate = () => {

    const [language, setLanguage] = useState(options[0])


    return (
        <div>
            <Dropdown options={options}
                      selected={language}
                      onSelectedChange={setLanguage}
                      label="Select yo language"
            />
        </div>
    )


}

export default Translate