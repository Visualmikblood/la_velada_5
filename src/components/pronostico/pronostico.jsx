import React, { useEffect, useRef } from 'react';
import './pronostico.scss';


const Pronostico = () => {

    return (
        <section>
            <h2>
                Pronósticos de la comunidad
            </h2>
            <div className="div_con_imgs_y_pronosticos_info">
                <div className='bloque_imgs_par_de_luchadores_mas_info'>
                    <a href="">
                        <img src="/images/luchadores/plano_medio/grefg (1).webp" alt="" />
                        <img src="/images/luchadores/plano_medio/westcol.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos'>
                                        <span>
                                            GREFG
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            WESTCOL
                                        </span>
                                        <span>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <p className='numero_de_votos'>
                                BASADO EN  <span>15.518</span> votaciones de usuarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="div_con_imgs_y_pronosticos_info">
                <div className='bloque_imgs_par_de_luchadores_mas_info'>
                    <a href="">
                        <img src="/images/luchadores/plano_medio/grefg (1).webp" alt="" />
                        <img src="/images/luchadores/plano_medio/westcol.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos'>
                                        <span>
                                            GREFG
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            WESTCOL
                                        </span>
                                        <span>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <p className='numero_de_votos'>
                                BASADO EN  <span>15.518</span> votaciones de usuarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>






            <div className="div_con_imgs_y_pronosticos_info">
                <div className='bloque_imgs_par_de_luchadores_mas_info'>
                    <a href="">
                        <img src="/images/luchadores/plano_medio/grefg (1).webp" alt="" />
                        <img src="/images/luchadores/plano_medio/westcol.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos'>
                                        <span>
                                            GREFG
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            WESTCOL
                                        </span>
                                        <span>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <p className='numero_de_votos'>
                                BASADO EN  <span>15.518</span> votaciones de usuarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="div_con_imgs_y_pronosticos_info">
                <div className='bloque_imgs_par_de_luchadores_mas_info'>
                    <a href="">
                        <img src="/images/luchadores/plano_medio/grefg (1).webp" alt="" />
                        <img src="/images/luchadores/plano_medio/westcol.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos'>
                                        <span>
                                            GREFG
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            WESTCOL
                                        </span>
                                        <span>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <p className='numero_de_votos'>
                                BASADO EN  <span>15.518</span> votaciones de usuarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="div_con_imgs_y_pronosticos_info">
                <div className='bloque_imgs_par_de_luchadores_mas_info'>
                    <a href="">
                        <img src="/images/luchadores/plano_medio/grefg (1).webp" alt="" />
                        <img src="/images/luchadores/plano_medio/westcol.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos'>
                                        <span>
                                            GREFG
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            WESTCOL
                                        </span>
                                        <span>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <p className='numero_de_votos'>
                                BASADO EN  <span>15.518</span> votaciones de usuarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="div_con_imgs_y_pronosticos_info">
                <div className='bloque_imgs_par_de_luchadores_mas_info'>
                    <a href="">
                        <img src="/images/luchadores/plano_medio/grefg (1).webp" alt="" />
                        <img src="/images/luchadores/plano_medio/westcol.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos'>
                                        <span>
                                            GREFG
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            WESTCOL
                                        </span>
                                        <span>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <p className='numero_de_votos'>
                                BASADO EN  <span>15.518</span> votaciones de usuarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="div_con_imgs_y_pronosticos_info">
                <div className='bloque_imgs_par_de_luchadores_mas_info'>
                    <a href="">
                        <img src="/images/luchadores/plano_medio/grefg (1).webp" alt="" />
                        <img src="/images/luchadores/plano_medio/westcol.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos'>
                                        <span>
                                            GREFG
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            WESTCOL
                                        </span>
                                        <span>
                                            20%
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <p className='numero_de_votos'>
                                BASADO EN  <span>15.518</span> votaciones de usuarios
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


};


export default Pronostico;