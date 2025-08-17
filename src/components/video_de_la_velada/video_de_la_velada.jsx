import React, { useEffect, useRef } from 'react';
import './video_de_la_velada.scss';


const Video_de_la_velada = () => {

    return (

        <section className='seccion_de_video_velada'>
            <h2>
                la velada del año
            </h2>
            <div className='div_que_tiene_portada_del_video_y_iframe'>
                <img src="" alt="" />
                <iframe className="video_velada" width="100%" height="360" src="https://www.youtube.com/embed/YE2Tmktpp50?si=LRuZPhF3fK7oEa1K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    );





    }; 

    export default Video_de_la_velada;