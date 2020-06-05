import React, { Component } from 'react';
import logo from './logo.png'; 

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ display:'flex', justifyContent:'center', padding:'50px'}}>
                    <img style={{height:'250px',width:'800px', overflow:'hidden'}} src={logo} alt="Logo" />
                </div>
                <div style={{ display:'flex', justifyContent:'center'}}>
                    <h2>Website Currently Under Maintenance</h2>
                </div>
                <div style={{ display:'flex', justifyContent:'center'}}>
                    <h3>Sorry For Any Inconvenience Cost</h3>
                </div>
            </div>
        );
    }
}

export default Home;