import "./VideoItem.css";
import React from "react";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="Video-item  list-group-item"
    >
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="ml-2">{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
