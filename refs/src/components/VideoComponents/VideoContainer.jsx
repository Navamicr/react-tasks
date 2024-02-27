import React from 'react'
import VideoItem from './VideoItem'
import Player from './Player'

const VideoContainer = ({state,selectedVideo,handleClick}) => {
  return (
    <section id='videoBlock'>
        <article>
            <aside className='left'>
            {/* <iframe width="560" height="600" src="https://www.youtube.com/embed/8xg3vE8Ie_E?si=iCXMCklp7gXVDOtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </aside> */}
            {/* <Player state={state}/> */}
            <Player selectedVideo={selectedVideo}/>
            </aside>
            <aside className='right'>
                {
                    state.map(video=>{
                        return <VideoItem key={video.id}video={video} handleClick={handleClick}/>
                    })
                }
            </aside>
        </article>
    </section>
  )
}

export default VideoContainer