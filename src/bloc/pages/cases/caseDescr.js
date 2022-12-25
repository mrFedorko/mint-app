import { SVGarrowLeftShort, SVGarrowRightShort, SVGcalendar, SVGlikeCase, SVGpiggiBank } from "../../../svg/svg";


export const CaseDescr = (props) => {

    const activeCase = props.activeCase;
    let content;
    const display = props.display
    if (!activeCase){
        content = <></>
    } else {
        const {type, name, descr, from, adress, term, img, price, allowed} = activeCase
        content = <div className="case-element__desc" style={{display}} onClick={(e) =>{e.target.className === "case-element__desc" && props.handleCloseDescr()} }>
                    <div className="case-element__control case-element__control-left" onClick={props.handlePrevDescr}>
                        <SVGarrowLeftShort/>
                    </div>
                    <div className="case-element__control case-element__control-right" onClick={(e) => {props.handleNextDescr(); props.handleScroll();} }>
                        <SVGarrowRightShort/>
                    </div>
                    <div className="case-element__window ">
                        <div className="case-element__close" onClick={props.handleCloseDescr}>&times;</div>
                        <div className="case-element__heart">
                            <SVGlikeCase/>
                        </div>
                        <div  className="case-element__window-wrap">
                            <img  ref={props.scrollRef} className="case-element__desc-img fadein" src={`img/cases/${type}/${img.max}`} alt=""/>
                            <div className="case-element__desc-title">{name}</div>

                            <div className="case-element__desc-text">{descr}</div>
                            <div className="case-element__list">
                                <div className="case-element__thesis">
                                    <div className="case-element__thesis-icon">
                                        <SVGcalendar/>
                                    </div>
                                    <div className="case-element__thesis-text">{adress}</div>
                                </div>

                                <div className="case-element__thesis">
                                    <div className="case-element__thesis-icon">
                                        <SVGpiggiBank/>
                                    </div>
                                    <div className="case-element__thesis-text">Цена всего проекта {price} руб</div>
                                </div>

                                <div className="case-element__thesis">
                                    <div className="case-element__thesis-icon">
                                        <SVGcalendar/>
                                    </div>
                                    <div className="case-element__thesis-text">Монтаж  произведен {from}</div>
                                </div>

                                <div className="case-element__thesis">
                                    <div className="case-element__thesis-icon">
                                        <SVGcalendar/>
                                    </div>
                                    <div className="case-element__thesis-text">изготовлена за {term} дней</div>
                                </div>

                                <div className="case-element__thesis">
                                    <div className="case-element__thesis-icon">
                                        <SVGcalendar/>
                                    </div>
                                    <div className="case-element__thesis-text">Согласована в архитектуре: {(allowed && "ДА") || "НЕТ"}</div>
                                </div>
                            </div>

        

                            <div className="case-element__descr-tags">
                                <div className="case-element__descr-subtitle">Тэги</div>
                                <div className="case-element__tags-wrap">
                                    <button className="case-element__descr-tag">Объемые буквы</button>
                                    <button className="case-element__descr-tag">Вывески 20-30 тыс.₽</button>
                                    <button className="case-element__descr-tag">Световые вывески</button>
                                    <button className="case-element__descr-tag">Вывески, согласованные в администрации</button>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
    }


    return(
        <>
            {activeCase && content}
        </>
    )
}