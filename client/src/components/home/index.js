import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                This is home page
                <div className="row">
                    <Link to="../register">
                        <button 
                            className="btn waves-effect red lighten-2"
                            type="submit"
                            name="action"
                        >
                            Sign Up
                        </button>
                    </Link> &nbsp;&nbsp;
                    <Link to="../login">
                        <button 
                            className="btn waves-effect red lighten-2"
                            type="submit"
                            name="action"
                        >
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;