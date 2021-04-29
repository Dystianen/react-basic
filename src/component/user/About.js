import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../navigation/Navbar.js';
import Video from '../Layouts/Video.js';

class About extends React.Component {
    render(){    
        return(
            <div>
                <Navbar />
            </div>
        )
    }
}
export default About;