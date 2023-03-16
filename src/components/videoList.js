import React from 'react';
import VideoItem from './videoItem';

const videoList = ({videos, onVideoSelect}) => {
 const RenderedVideos =  videos.map((video) => {
      return<VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId}  video={video}/>
    })

    return <div className="ui relaxed divided list">
      {RenderedVideos}</div>
}

export default videoList;