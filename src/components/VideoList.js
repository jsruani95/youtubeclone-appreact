import React from 'react';
import { Grid } from "@material-ui/core";
import VideoItem from './VideoItem';

const VideoList = ({video, onVideoSelect}) => {
    const listOfVideo = video.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}></VideoItem>)

    return (
        <Grid container spacing={10}>
            {listOfVideo}
        </Grid>
        );
}

export default VideoList;