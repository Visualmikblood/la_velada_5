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
                        <div>
                            <img src="/images/luchadores/plano_medio/grefg-vs-westcol.webp" alt="" />
                        </div>
                    </a>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );


};


export default Pronostico;