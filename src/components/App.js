import React from "react";
import Searchbar from "./Searchbar";
import youtube, { baseParams } from "../apis/youtube";
import VideoList from "./VidoeList";
import VideoDetails from "./VideoDetails";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermsubmit = async term => {
    //console.log(term);
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container">
        <Searchbar OnformSubmit={this.onTermsubmit} />
        <div className="row">
          <div className="col-sm-8 ">
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="col-sm-4">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
