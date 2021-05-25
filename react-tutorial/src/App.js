import React, {Component} from 'react'
import Table from './Table'

class App extends Component {

    render() {
        const characters = [
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
        ]

        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App;