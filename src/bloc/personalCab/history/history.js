import '../sass/history.scss'

export const History = () => {
  return(
    <>
        <div className="history">
            
            <div className="container">
                <div className="history__heading">История заказов</div>

                <div className="history__wrap">
                    <div className="history__strip">
                        <div className="history__number">1</div>
                        <div className="history__parametr">Заказ от: 03.03.1020 </div>
                        <div className="history__parametr">Визитки 4+0 (односторонние)</div>
                        <div className="history__parametr">500 шт</div>
                        <div className="history__parametr">Цена: 3000 руб</div>
                        <div className="history__parametr">Статус заказа: выполнен</div>
                        <div className="history__parametr">Дата выдачи: 03.03.1020</div>
                        <div className="history__documents">
                            <button type="button" class="history__chek" href="/">Накладная</button>
                            <button type="button" class="history__chek" href="/">Запросить макет</button>
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    </>
  )
}
