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
                        <img src="/images/luchadores/plano_medio/segunda_lucha_movil/viruzz.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/segunda_lucha_movil/tomas.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/segunda_lucha_movil/viruzz-vs-tomas.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos primer_luchador_segunda_lucha'>
                                        <span>
                                            VIRUZZ
                                        </span>
                                        <span>
                                            80%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos segundo_luchador_segunda_lucha'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            TOMAS
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
                        <img src="/images/luchadores/plano_medio/tercera_lucha_movil/alana.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/tercera_lucha_movil/arigeli.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/tercera_lucha_movil/alana-vs-arigeli.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos primer_luchador_tercera_lucha'>
                                        <span>
                                            ALANA
                                        </span>
                                        <span>
                                            70%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos segundo_luchador_tercera_lucha'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            ARIGELI
                                        </span>
                                        <span>
                                            30%
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
                        <img src="/images/luchadores/plano_medio/cuarta_lucha_movil/andoni.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/cuarta_lucha_movil/carlos.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/cuarta_lucha_movil/andoni-vs-carlos.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos primer_luchador_cuarta_lucha'>
                                        <span>
                                            ANDONI
                                        </span>
                                        <span>
                                            71%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos segundo_luchador_cuarta_lucha'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            CARLOS
                                        </span>
                                        <span>
                                            29%
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
                        <img src="/images/luchadores/plano_medio/quinta_lucha_movil/abby.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/quinta_lucha_movil/roro.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/quinta_lucha_movil/abby-vs-roro.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos primer_luchador_quinta_lucha'>
                                        <span>
                                            ABBY
                                        </span>
                                        <span>
                                            24%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos segundo_luchador_quinta_lucha'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            RORO
                                        </span>
                                        <span>
                                            76%
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
                        <img src="/images/luchadores/plano_medio/sexta_lucha_movil/perxitaa.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/sexta_lucha_movil/gaspi.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/sexta_lucha_movil/perxitaa-vs-gaspi.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos primer_luchador_sexta_lucha'>
                                        <span>
                                            PERXITAA
                                        </span>
                                        <span>
                                            36%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos segundo_luchador_sexta_lucha'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            GASPI
                                        </span>
                                        <span>
                                           64%
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
                        <img src="/images/luchadores/plano_medio/septima_lucha_movil/peereira.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/septima_lucha_movil/rivaldios.webp" alt="" />
                        <img src="/images/luchadores/plano_medio/septima_lucha_movil/peereira-vs-rivaldios.webp" alt="" />
                    </a>
                    <div className='barras_de_pronosticos_con_votaciones'>
                        <div className='barra_de_pronosticos_con_votaciones_2'>
                            <a className="a_con_barra_pronosticos" href="">
                                <div className='div_dentro_de_a_de_barras_de_pronosticos'>
                                    <div className='primer_luchador_de_la_barra_de_pronosticos primer_luchador_septima_lucha'>
                                        <span>
                                            PEREIRA
                                        </span>
                                        <span>
                                            56%
                                        </span>
                                        <div>

                                        </div>

                                    </div>
                                    <div className='segundo_luchador_de_la_barra_de_pronosticos segundo_luchador_septima_lucha'>
                                        <div>
                                            
                                        </div>
                                        <span>
                                            RIVALDIOS
                                        </span>
                                        <span>
                                            44%
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