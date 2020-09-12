import React, { Component } from 'react'

export class Search extends Component 
{
    state = {
        text : ""
    };
    onChange = (event) => 
    {
        this.setState({[event.target.name] : event.target.value})
    };
    render() {
        return (
            <div>
                <form className="form">
                    <input
                        type="text" 
                        name="text" 
                        placeholder="search user"
                        value = {this.state.text}
                        onChange = {this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-dark btn-block"
                    />
                </form>
            </div>
        );
    }
}

export default Search