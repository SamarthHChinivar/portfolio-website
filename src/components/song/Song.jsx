import React from 'react'
import './song.css'

const Song = () => {
    return (
        <section id='song'>
            
            <h5>I Am Listening To This</h5>
            <h2>Song</h2>

            <div className='music__container'>
                <a href="https://open.spotify.com/user/313tyn5czgxn5jksws6pusqjf5si" target='_blank'>
                    
                    <img 
                        src="https://spotify-novatorem-gamma.vercel.app/api/spotify/?background_color=000000&border_color=ffffb3" 
                        alt="Spotify" />
                        
                </a>
            </div>

        </section>
    );
}

export default Song