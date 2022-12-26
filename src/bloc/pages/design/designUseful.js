import { useEffect } from "react";
import { useOutletContext } from "react-router-dom"

export const DesignUseful = () => {
    
    const [active, setActive] = useOutletContext();
    useEffect(() => {
        setActive('useful')
    })

    return(
        <div className="useful fadein">
        <h3 className="useful__subject">С чего все начинается</h3>
        <div className="useful__wrapper">
            <div className="useful__introduction">Для создания рекламных материалов всегда необходимо наличие дизайн-макета. Вы можете предоставить свой макет, если же такового не имеется,  предлагаем воспользоваться услугами нашего опытного дизайнера. Обещаем индивидуальный подход и отличный результат сотрудничества!</div>
            <img className="design__img" src="./img/laptop.png" alt="laptop"></img>
        </div>
        
        <div className="useful__block">
            <h5 className="useful__title">Создание простого макета</h5>
            <div className="useful__group">
                
                <div className="useful__descr">Вы предоставляете четкое техническое задание (точный текст, нужные изображения, необходимую компоновку на рекламном поле). Нет необходимосте в дополнительной подборке или обработке изображений.<br />Как правило, это некий баннер или табличка, так назваемые "фон-буквы".
                </div>
                <div className="useful__img useful__img-price">Пример<img className="rounded float-start" src="img/designPrice/price1.jpg" alt="price1"></img></div>
            </div>
            <h5 className="useful__price">300 ₽</h5>
        </div>

        <div className="useful__block">
            <h5 className="useful__title">Создание макета средней сложности</h5>
            <div className="useful__group">
                
                <div className="useful__descr">Вы предоставляете четкое техническое задание (текст, по возможности, изображения, пожелания по офрмлению). Включает в себя обработку картинок, стилизация шрифтов, компоновка объектов на макете.
                </div>
                <div className="useful__img useful__img-price">Пример<img className="rounded float-start" src="img/designPrice/price2.jpg" alt="price2"></img></div>
            </div>
            <h5 className="useful__price">500-1000 ₽</h5>
        </div>

        <div className="useful__block">
            <h5 className="useful__title">Создание сложного макета</h5>
            <div className="useful__group">
                
                <div className="useful__descr">Четкое или размытое тз. Сложная задумка, множество элементов, возможны составление и редактирование текстов, ретушь фото.
                </div>
                <div className="useful__img useful__img-price">Пример<img className="rounded float-start" src="img/designPrice/price3.jpg" alt="price3"></img></div>
            </div>
            <h5 className="useful__price">1000-3000 ₽</h5>
        </div>

        <div className="useful__block">
            <h5 className="useful__title">Создание фирменного стиля</h5>
            <div className="useful__group">
                
                <div className="useful__descr">"С нуля" делаем брэнд-бук для Вашей компании. Создаем логотип, фирменный знак, составляем слоган, подбираем фирменный шрифт, цветовое решение и оформление рекламных продуктов. Предоставим все необходимые исходники для дальнейшего пользования.
                </div>
                <div className="useful__img useful__img-price">Пример<img className="rounded float-start" src="img/designPrice/price4.jpg" alt="price4"></img></div>
            </div>
            <h5 className="useful__price">5000-130000 ₽</h5>
        </div>

    </div>
    )
  }