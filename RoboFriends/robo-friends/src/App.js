import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import "./App.css";

class App extends Component {

    constructor( ) {

        super( );
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount( ) {

        fetch( 'https://jsonplaceholder.typicode.com/users' )
        .then( response => response.json( ) )
        .then( users => this.setState( { robots: users } ) );

    }

    onSearchboxChange = ( event ) => { this.setState( { searchfield: event.target.value } ); }
    
    render( ) {

        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase( ).includes( this.state.searchfield.toLowerCase( ) );
        } );

        return (
            < div className="tc" >
                < h1 className='f2' > ROBOFRIENDS </ h1 >
                < SearchBox searchChange= { this.onSearchboxChange }/>
                < Scroll >
                    < CardList robots = { filteredRobots } />
                </ Scroll >
            </ div >
        );

    }

}

export default App;