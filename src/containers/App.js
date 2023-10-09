import React, { Component } from 'react';
import Itemlist from '../components/itemlist';
import robots from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <Itemlist robots={filteredRobots}/>
                </Scroll>
                
            </div>
        )
    }
}
export default App;