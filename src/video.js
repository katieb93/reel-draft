import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import Vid from "./HOW TO PLAY.mp4";
// import styled from 'styled-components'; // Import styled here
import './video.css';

const VideoPlayer = () => {
  
    return (
      <div>
        {/* {showVideo && (  // Conditionally render video player */}
            <div className="vid-here">
            {/* <div className="vid-here" style={{ opacity: isVideoLoaded ? 1 : 0 }}> */}
            <ReactPlayer
              url={Vid}
              playing={true}
              controls={true}
              loop={true}
              //   muted={true}
              playsinline={true}
            //   onReady={onLoadedData}
              preload="metadata" // preload only metadata
              poster="path/to/poster.jpg" // set a poster image
            />
          </div>
        {/* )} */}
      </div>
    );
  };
  
  export default VideoPlayer;
