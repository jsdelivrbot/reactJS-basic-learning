import React from 'react';

const VideoDetail = ({video}) => {
    //react trick, to prevent the situation that parent component is not fast enough to fetch information that meet the child components need
    if(!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8 ">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item">

                </iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>

        </div>
    );
};

export default VideoDetail;