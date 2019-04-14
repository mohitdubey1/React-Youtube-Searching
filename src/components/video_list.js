import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((videos) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                videos={videos}
                key={videos.etag}
            />
        )
    })
    return (
        <ul className="col-sm-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;