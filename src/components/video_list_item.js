import React from 'react';

const VideoListItem = ({ videos, onVideoSelect }) => {
    // const { videos, onVideoSelect } = props;
    const imageURL = videos.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(videos)} className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img src={imageURL} className="media-object" />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{videos.snippet.title}</div>
            </div>
        </li>
    )

};

export default VideoListItem;