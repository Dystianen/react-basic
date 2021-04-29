import React from "react";
import './Video.css';
import video from '../../img/video/bg.mp4';
import { Link } from 'react-router-dom';

const YouTubeComp = () => {
    return (
            <div className="vidheader" style={{ zIndex: -1 }}>
                <div className="overlay"></div>
                <video
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
    )
}
YouTubeComp.defaultProps = {
    time: "00.00",
    title: "Title here",
    desc: "Description",
}

export default YouTubeComp;