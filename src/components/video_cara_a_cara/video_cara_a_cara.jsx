import React, { useEffect, useRef } from 'react';
import './video_cara_a_cara.scss';


const Video_cara_a_cara = () => {

    return (

        <section className='seccion_video_cara_a_cara'>
            <h2>
                Cara a cara boxeadores
            </h2>
            <div className='div_que_tiene_portada_del_video_de_cara_a_cara_y_iframe'>
                <img src="" alt="" />
                <iframe className='video_de_cara_a_cara' width="100%" height="360" src="https://www.youtube.com/embed/NcWmLX8953k?si=yMd7fI6SEX0NIV7D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>

    );


};


export default Video_cara_a_cara;