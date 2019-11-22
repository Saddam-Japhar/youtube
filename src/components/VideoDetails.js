import React from "react";
const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>loading....</div>;
  }
  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div class="embed-responsive d-flex embed-responsive-16by9">
        <iframe
          title="Video Player"
          class="embed-responsive-item"
          src={VideoSrc}
          style={{ height: 300 }}
        ></iframe>
      </div>

      <div className="list-group list-group-item">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetails;
