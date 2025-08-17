import React, { useEffect, useRef } from 'react';
import './video_pesaje.scss';


const Video_pesaje = () => {

    return (

        <section className='seccion_pesaje'>
            <h2>
                Pesaje boxeadores
            </h2>
            <div className='div_que_tiene_portada_del_video_de_pesaje_y_iframe'>
                <img src="" alt="" />
                <iframe className='video_pesaje' width="100%" height="360" src="https://www.youtube.com/embed/veOY93Frmls?si=BvPasonFwIl1aDn5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>

    );


    };


    export default Video_pesaje;