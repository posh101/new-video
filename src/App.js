import React, {useState, useEffect} from 'react';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetails from './components/videoDetails';
import useVideos from './Hooks/useVideos';


function App() {
 
 const [selectedVideo, setSelectedVideo] = useState(null)
 const [videos, search] = useVideos('movies')

 useEffect(()=> {
    setSelectedVideo (videos[0])
 }, [videos])
   

 return <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
            <VideoDetails video={selectedVideo} />
            </div>
            <div className='five wide column'>
            <VideoList
             onVideoSelect={(video) => setSelectedVideo(video)} 
             videos={videos}/>
            </div>
        </div>
        </div>
        </div>
    }
   

export default App