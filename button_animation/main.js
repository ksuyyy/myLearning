var button  = document.getElementsByClassName('button'); 			//Отклавливается клик мыши по кнопке с классом button; document.getElementsByClassName - получить все элементы класса
	forEach = Array.prototype.forEach;                  			//Обращение к свойству кнопки; Array.prototype.forEach - ссылка на метод forEach

forEach.call(button, function (b) {    								//Отлавливается клик по кнопке
	b.addEventListener('click', addElement); 						//Обработчик событий, который отлавливает клик и вызывает функцию
});

function addElement(e) {                      						//Вызов функции addElement
	var addDiv = document.createElement('div');						//Исп метод document.createElement, в скобках указ, какой эл-т создается
		mValue = Math.max(this.clientWidth, this.clientHeight);		//Позиционирование пульсирующего круга пропорционально размерам размеры кнопки. Выведение максим знач кнопки по ширине и высоте в отдельную переменную
		rect   = this.getBoundingClientRect();						//Параметры кнопки (размер и позиция относительно окна), this.getBoundingClientRect - возвращает размер элемента и его позицию (для его исп функции присвоено значение e)
		sDiv   = addDiv.style;										//Задание пульсирующ кругу максим парам ширины и высоты; ссылка на метод addDiv.style;	перенос пульсирующего круга под курсор при клике
		px     = 'px';
		
	sDiv.width = sDiv.height = mValue + px;							//Присваиваем максим значение ширине и высоте блока
	sDiv.left  = e.offsetX - mValue/2 + px;							//Вычисление координат для позиционирования (отступов) с левой стороны по оси X (отнимаем кол-во пикселей от края экрана до левой стороны кнопки)
	sDiv.top   = e.offsetY - mValue/2 + px;							//Вычисление координат для позиционирования (отступов) сверху стороны по оси Y


	addDiv.classList.add('pulse');									//Для эл-та addDiv добавляется класс pulse
	this.appendChild(addDiv);										//Приставка this (объект) c методом appendChild для отображения dom-элемента; в скобках указывается, какой элемент создается
}