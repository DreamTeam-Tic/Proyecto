import React   from "react";
// import video from '../../assets/video.mp4'
import ReactPlayer from "react-player";


function Video() {
    return (
        <div className= "container-lg mx-auto d-flex justify-content-center mt-5" >
            {/* <ReactPlayer src={video} width="320" height="240" controls="controls" autoplay="true"/> */}
            <ReactPlayer
                url='https://www.youtube.com/watch?v=8ucHT-qQhOA'
                width="1200px"
                height="500px"
                
                controls/>
        </div>
    )
}
export default Video;