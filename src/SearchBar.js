import React from 'react';
import './App.css';

class SearchBar extends React.Component {
    state = { val: '' }

    onInputChange = (event) => {
        this.setState({ val: event.target.value });
        // jab realtime search krna ho tab
        // this.props.userSubmit(this.state.val);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // tab btn pr click krne se data lena ho tab
        this.props.userSubmit(this.state.val);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className='text-center'>
                    <h1><u><b>Image Search</b></u></h1>
                    <input
                        className="inputStyle"
                        type="text"
                        value={this.state.val}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;