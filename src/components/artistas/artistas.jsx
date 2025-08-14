import React, { useEffect, useRef } from 'react';
import './artistas.scss';


const Artistas = () => {

    return (

        <section className='seccion_artistas'>
            <h2>
                artistas
            </h2>
            <div className='div_con_todos_los_artistas'>
                <div className='div_de_un_solo_artista_con_nombre'>
                    <img src="/images/seccion_artistas/aitana.webp" alt="" />
                    <h2>
                        aitana
                    </h2>
                </div>
            </div>
        </section>


    );


    };


    export default Artistas;