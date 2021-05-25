import { render } from '@testing-library/react'
import React, {Component} from 'react'
import Table from './Table'

class App extends Component {

    state = {
        characters : [
            {
                name: 'Kalle',
                job: 'Managing director',
            },
            {
                name: 'Pelle',
                job: 'Administration manager',
            },
            {
                name: 'Olle',
                job: 'Beverage assistant',
            },
            {
                name: 'Lasse',
                job: 'Coffee machine cleaner',
            },
        ],
    }

    removeCharacter = (index) => {
        const {characters}  = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    render() {
        const {characters} = this.state;

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        );
    }
}

export default App;