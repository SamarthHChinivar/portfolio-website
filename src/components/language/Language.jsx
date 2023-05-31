import React from 'react'
import './language.css'

const Language = () => {
    return (
        <section id='language'>
            
            <h5>Get To Know</h5>
            <h2>My Language Stats</h2>

            <div className='language__container'>
                
                <img 
                    src="https://github-readme-stats-hazel-pi-31.vercel.app/api/top-langs/?username=SamarthHChinivar&langs_count=12&layout=compact&theme=tokyonight" 
                    alt="Top Langs" />

            </div>

        </section>
    );
}

export default Language