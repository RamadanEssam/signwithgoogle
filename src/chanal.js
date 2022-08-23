import React, { Component } from 'react';
import axios from 'axios';

class chanal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            YOUTUBE_Chanal_API: 'https://youtube.googleapis.com/youtube/v3/playlists?',
            YOUTUBE_API_KEY:"AIzaSyBLm6It2O6W9Ye8QvUHORSFir5Df4-LzM0",
            CHANAL_ID: "UChdtNMMOWKkw9-YWg64K07w",
            PART: "snippet",
            //  CLIENT_ID:"843723490431-v5jj3fbkmscmi08h0jd8njguetdjqktd.apps.googleusercontent.com",
            data: [],
            videoItems: []
        }
    }
    getData = async () => {
        await axios.get(`${this.state.YOUTUBE_Chanal_API}part=snippet&channelId=${this.state.CHANAL_ID}&maxResults=25&key=${this.state.YOUTUBE_API_KEY}`).then(res => {
            console.log(res);
            this.setState({ videoItems: res.data.items })
        }).catch(err => { console.log(err); });
    }
    componentDidMount() {
        // async function getServciersideProps() {
        //   const res = await fetch(`${YOUTUBE_Playlist_API}?part=snippet&chanalId=PLEWtpTkGhCPI227kmlslKfhmBTZuxG-D7&maxResults=50&key=${YOUTUBE_API_KEY}`);
        //   const data = await res.json();
        //   setItems(data)
        // }

        //         curl \
        //   'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UChdtNMMOWKkw9-YWg64K07w&maxResults=25&key=[YOUR_API_KEY]' \
        // 
        this.getData()


    }
    render() {
        return (
            <>
                <h3>Get chanal</h3>
                <div className="row p-5">
                    {this.state.videoItems && this.state.videoItems.map((video, index) => (
                        <div className="col-6" key={index}>
                            <h3>{video.snippet.title}</h3>
                            <iframe
                                title={video.snippet.title}
                                className="video-iframe"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="row p-5">


                    {/* {this.state.data.map(item => {
                        const { id, snippet = {} } = item;
                        const { title, thumbnails = {}, resourceId } = snippet;
                        const { medium = {} } = thumbnails;
                        return (
                            <div className="col-6" key={id}>
                                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                                    <p>
                                        <img src={medium.url} width={medium.width} height={medium.height} alt="" />
                                    </p>
                                    <h3>{title}</h3>
                                </a>
                            </div>
                        )
                    })} */}

                </div>
            </>
        );
    }
}

export default chanal;