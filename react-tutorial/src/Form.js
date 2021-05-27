import { render } from '@testing-library/react'
import React, {Component} from 'react'

class Form Extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState
}

handleChange = (event) => {
    const {name,value} event.target

    this.setState({[name]: value,
    })
}

<Form handleSubmit={this.handleSubmit} />

submitForm = () => () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
}

<input type="button" value="Submit" onClick={this.submitForm} />

render() {
    const { name, job } = this.state;

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange} />
        </form>
    );
}

export default Form;