import React from 'react';
import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube';


class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('react hooks')
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDg2cXTOOAUD7iIW6EciNEqQsLy1_5B5e8',
                q: searchTerm,
            }
        });
        this.setState({video: response.data.items, selectedVideo: response.data.items[0]});
    }
            
  

    render() {
        const { selectedVideo, video } = this.state;

        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}></VideoDetail>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList video={video} onVideoSelect={this.onVideoSelect}></VideoList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;