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


                <div className='div_de_un_solo_artista_con_nombre'>
                    <img src="/images/seccion_artistas/delarose.webp" alt="" />
                    <h2>
                        delarose
                    </h2>
                </div>



                <div className='div_de_un_solo_artista_con_nombre'>
                    <img src="/images/seccion_artistas/eladiocarrion.webp" alt="" />
                    <h2>
                        eladio carrion
                    </h2>
                </div>



                <div className='div_de_un_solo_artista_con_nombre'>
                    <img src="/images/seccion_artistas/grupofrontera.webp" alt="" />
                    <h2>
                        grupo frontera
                    </h2>
                </div>



                <div className='div_de_un_solo_artista_con_nombre'>
                    <img src="/images/seccion_artistas/losdelrio.webp" alt="" />
                    <h2>
                        los del rio
                    </h2>
                </div>




                <div className='div_de_un_solo_artista_con_nombre'>
                    <img src="/images/seccion_artistas/melendi.webp" alt="" />
                    <h2>
                        melendi
                    </h2>
                </div>



                <div className='div_de_un_solo_artista_con_nombre'>
                    <img src="/images/seccion_artistas/myketowers.webp" alt="" />
                    <h2>
                        mike towers
                    </h2>
                </div>
            </div>
        </section>


    );


    };


    export default Artistas;