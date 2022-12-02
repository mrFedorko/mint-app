
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../../sass/sassTemplates/hat.scss';
import { CaseDescr } from './caseElement';
import './cases.scss';

const Cases = () =>  {
    const [active, setActive] = useState('useful');

    return(
        <>
            <section className="hat">
                <div className="container">
                    <div className="hat__header">
                        <div className="hat__buttons">
                            <button onClick={() => setActive('signs')} className={'hat__button'+ (active === 'signs' ? ' signs__button_active' : '')}>Вывески</button>
                            <button onClick={() => setActive('polygraphy')} className={'hat__button'+ (active === 'polygraphy' ? ' signs__button_active' : '')}>Полиграфия</button>
                            <button onClick={() => setActive('design')}  className={'hat__button'+ (active === 'design' ? ' signs__button_active' : '')}>Дизайн</button>
                        </div>
                        <h1 className="hat__title">Кейсы</h1>
                    </div>
                </div>
            </section>
            <section className="cases">
                <div className="container">
                    <div className="cases__grid">

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/california.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 1</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/terem.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 1Вывеска 1Вывеска 1Вывеска 1Вывеска 1</div>
                            </a>
                        </div>
                        
                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/kistochki.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 2</div>
                            </a>
                        </div>    

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/krasunya.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 3</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/impuls.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 4</div>
                            </a>
                        </div>
                        
                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/megafon.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 5</div>
                            </a>
                        </div>
                        
                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/kofe.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 6</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/ugaliny.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 7</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/alphabet.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 8</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/selfie.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 9</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/art.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 10</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/products.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 11</div>
                            </a>
                        </div>

                        <div className="cases__element">
                            <a href="/">
                                <div className="cases__img"><img src="img/cases/signs/center.jpg" alt=""/></div>
                                <div className="cases__title">Вывеска 12</div>
                            </a>
                        </div>
                    </div>
                </div>
                <CaseDescr/>
            </section>
        </>
    );
    
};

export default Cases;