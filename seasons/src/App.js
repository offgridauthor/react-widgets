import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {lat: null}

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            err => console.error(err)
        )

    }


    render() {


        return (
            <div className="App">
                {this.state.lat}
            </div>
        );

    }

}

export default App;
