import React from 'react';
import './App.css';
import {db} from './service/firebase'
import Paintings from "./paintings/Paintings.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PaintingExtraDetails from './painting-extra-details/Painting-extra-details';


class App extends React.Component {
    state = {
        paintings:null,
    };


    render() {
        // console.log( "renderr => "+this.state.paintings)
        return (
            <Router>
            <div className="App">
            <Header/>
                <Switch>
                    <Route path="/" exact component={Paintings} />
                    <Route path='/PaintingExtraDetails/:name' component={PaintingExtraDetails} />
                </Switch>
                {/* <Paintings data={this.state.paintings}/> */}
            <Footer/>
            </div>
        </Router>
        )
    }
}

function Header() {
    return (
        <header><h1>Paintings Gallery</h1></header>
    );
}

function Footer() {
    return (
        <footer>© All Rights Reserved</footer>
    );
}

export default App;