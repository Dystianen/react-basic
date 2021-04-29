import { render } from "@testing-library/react";
import React from "react";
import Video from "../Layouts/Video.js";
import Navbar from '../navigation/Navbar.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />   
                <Video />
            </div>
        )
    }
}

export default Home;