import React from "react"
import { useNavigate } from "react-router-dom"

const SignsUseful = () => {
    
    const navigate = useNavigate();
    const navigateToCalc = () => { navigate('/signs/calculator');}
    const navigateToCase = () => { navigate('/case');}
    
    return(
        <div className="useful fadein">
            <h3 className="useful__subject">Выбираем наружную рекламу для ваших целей и бюджета</h3>
            <div className="useful__wrapper">
                <div className="useful__introduction">Наружная реклама - это первое, с чем сталкивается клиент, посещая Вашу компанию. Поэтому важно, чтобы реклама вызывала позитивные впечатления и располагала к сотрудничеству! <br/> Давайте определимся - что вам нужно</div>
                <img className="useful__introduction-pic" src="./img/wat.png" alt="letters"></img>
            </div>
            
            <div className="useful__block">
                <h5 className="useful__title">Объемные буквы</h5>
                <div className="useful__group">
                    <div className="useful__img"><img className="rounded float-start" src="img/lettersMainPhoto.jpg" alt="letters"></img></div>
                    <div className="useful__descr">Это самый популярный и привлекательный вид вывесок. Они могут быть изготовлены из акрилового стекла, пластика ПВХ, композитных материалов, оцинкованной стали, меди, дерева и пр. Очень часто объемные буквы делают световыми. Вариантов исполнения множество, выбор - за вами.<br/>
                    Несмотря на высокую стоимость, объемные буквы позволят сэкономить за счет длительного срока эксплуатации, а также избавят от проблем с городской администрацией. Именно такие вывески в настоящее время являются законными!
                    </div>

                </div>
                <div class="btn-group mt-1" role="group" aria-label="Basic example">
                    <button onClick={navigateToCase} type="button" class="btn btn-outline-secondary">Примеры работ</button>
                    <button onClick = {navigateToCalc} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                </div>
            </div>

            <div className="useful__block">
                <h5 className="useful__title">Плоские таблички из пластика</h5>
                <div className="useful__group">
                    <div className="useful__img"><img className="rounded float-start" src="img/lettersMainPhoto.jpg" alt="letters"></img></div>
                    <div className="useful__descr">Нанесенное на пластик ПВХ изображение методом прямой печати. Ее главные преимущества - низкая цена, сжатые сроки изготовления и монтажа.<br/>
                    Чаще всего их используют внутри помещений, в качестве временных вывесок на фасаде, а также на специально согласованных рекламных площадях (на фасадах торговых центров).                  
                    </div>

                </div>
                <div class="btn-group mt-2" role="group" aria-label="Basic example">
                    <button onClick={navigateToCase} type="button" class="btn btn-outline-secondary">Примеры работ</button>
                    <button onClick = {navigateToCalc} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                </div>
            </div>
            
            <div className="useful__block">
                <h5 className="useful__title">Оформление баннером</h5>
                <div className="useful__group">
                    <div className="useful__img"><img className="rounded float-start" src="img/lettersMainPhoto.jpg" alt="letters"></img></div>
                    <div className="useful__descr"> Баннер с широкоформатной печатью, который крепиться к фасаду здания. Самый недорогой вид оформления. Баннеры используют в качестве временных вывесок, или временных указателей.
                    
                    </div>

                </div>
                <div class="btn-group mt-2" role="group" aria-label="Basic example">
                    <button onClick={navigateToCase} type="button" class="btn btn-outline-secondary">Примеры работ</button>
                    <button onClick = {navigateToCalc} type="button" class="btn btn-outline-secondary">Перейти в калькулятор</button>
                </div>
            </div>

        </div>
    )

}

export default SignsUseful