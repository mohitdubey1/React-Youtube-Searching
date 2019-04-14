import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyCdTJB9jx6Nw_rqItMwk0V7riTGViWQRsA';


// Create a new Component . this component should produce 
//Some HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }
  render() {
    // const videoSearch = _.debounce((term) => { this.videoSearch(term), 300 });
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.
          selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />

      </div>
    );
  }

}
//Take this compenent's generated HTML and put it 
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));