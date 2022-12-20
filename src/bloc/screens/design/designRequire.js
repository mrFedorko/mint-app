import './design.scss';

export const DesignRequire = () => {

  return(
    <div className="require"> 
      	<div className="require__subject">Технические требования к оформлению макета для офсетной печати</div>
		<div className="require__block">
			<div className="require__title">Форматы документа</div>
			<ul className="require__list">
				<li className="require__item">Файлы для цифровой печати принимаются только в форматах: CDR, TIF, JPG*, PDF, EPS</li>
				<li className="require__item">Многостраничные файлы принимаются в СDR и PDF</li>
				<span>*При сохранении текстовых элементов в формате JPG возможно наличие JPG-артефактов (пиксельная зернистость вокруг текстовых элементов)</span>
			</ul>
			<div className="require__title">Размер макета</div>
			<ul className="require__list">
				<li className="require__item">Макет должен быть сделан с припуском 1 мм с каждой стороны, например, для визитки размером 50х90 мм, размер макета составляет 52х92 мм</li>
				<li className="require__item">Значимая информация должна раполагаться не ближе 3 мм к краю (обрезному) макета, например, для визитки размером 50х90 мм, область значимой информации будет 44х84мм</li>
			</ul>
			<div className="require__title">Требования к файлам</div>
			<div className="require__sub">Общие</div>
			<ul className="require__list">
				<li className="require__item">Цветовая модель - CMYK</li>
				<li className="require__item">Не содержит альфа каналов</li>
				<li className="require__item">Цветовой профиль - Coated FOGRA39</li>
			</ul>
			<div className="require__sub">СDR, AI, EPS - файл</div>
			<ul className="require__list">
				<li className="require__item">Не содержит эффекты, ссылки на встроенные файлы, градиентные заливки, ole-объекты, градиентные заливки, прозрачности, абрисы</li>
				<li className="require__item">Не содержит текстовых элементов (все шрифты необходимо перевести в кривые)</li>
				<li className="require__item">Недопустимо задавать фон через свойства документа</li>
				<li className="require__item">СDR-файл 14 версии</li>
			</ul>
			<div className="require__sub">TIF, JPG - файл</div>
			<ul className="require__list">
				<li className="require__item">Все слои сведены</li>
				<li className="require__item">Не содержит альфа-каналов</li>
				<li className="require__item">Не содержит сжатий</li>
				<li className="require__item">Цветовой профиль настроен</li>
				<li className="require__item">Оптимальное разрешение 300 dpi</li>
			</ul>
			<div className="require__title">Цвет</div>
			<ul className="require__list">
				<li className="require__item">Цветовая модель - CMYK или Оттенкки серого</li>
				<li className="require__item">Минимальный состав цвета - 15%</li>
				<li className="require__item">Максимальный состав цвета 280%</li>
				<li className="require__item">Для черного текста размером от 5 пт. до 36 пт. рекомендуем С-0 M-0 Y-0 K-100</li>
				<li className="require__item">Для больших заливок и текста крупнее 36 пт. рекомендуем  С-60 M-50 Y-50 K-100</li>
			</ul>
			<div className="require__title">Размер шрифта</div>
			<ul className="require__list">
				<li className="require__item">Не менее 6 пт</li>
			</ul>
		</div>

		<div className="require__subject">Технические требования к оформлению макета для широкоформатной печати  </div>
		<div className="require__block">
			<div className="require__title">Форматы документа</div>
			<ul className="require__list">
				<li className="require__item">Файлы для широкоформатной печати принимаются только в формате TIF</li>
			</ul>
			<div className="require__title">Размер макета</div>
			<ul className="require__list">
				<li className="require__item">Макет должен быть сделан в размер, если Вам нужны поля, люверсы, проклейка или обрезка по контуру следует указать это в описании заказа.</li>
			</ul>
			<div className="require__title">Требования к файлам</div>
			<ul className="require__list">
				<li className="require__item">Цветовая модель - CMYK</li>
				<li className="require__item">Не содержит альфа каналов</li>
				<li className="require__item">Цветовой профиль - Coated FOGRA39</li>
				<li className="require__item">Не содержит эффекты, ссылки на встроенные файлы, градиентные заливки, ole-объекты, градиентные заливки, прозрачности, абрисы</li>
				<li className="require__item">Не содержит текстовых элементов (все шрифты необходимо перевести в кривые)</li>
				<li className="require__item">Недопустимо задавать фон через свойства документа</li>
				<li className="require__item">СDR-файл 14 версии</li>
			</ul>
			<div className="require__sub">TIF, JPG - файл</div>
			<ul className="require__list">
				<li className="require__item">Все слои сведены</li>
				<li className="require__item">Не содержит альфа-каналов</li>
				<li className="require__item">Все слои сведены</li>
				<li className="require__item">При использовании в макете белого фона необходимо обозначить край макета линиями конрастного цвета</li>
				<li className="require__item">Сжатие LZW</li>
				<li className="require__item">Оптимальное разрешение 300 dpi для интерьерной и от 72 dpi  для широкоформатной печати</li>
				<li className="require__item">Цветовой профиль - U.S. Web Coated (SWOP) v2</li>
			</ul>
		</div>

		<div className="require__title">Ждем Ваших заказов и правильно оформленных макетов ❤</div>
	</div>
  )
}