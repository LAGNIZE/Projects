ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map('map', {
		center: [55.776107, 37.648151],
		zoom: 18
	}, {
		searchControlProvider: 'yandex#search'
	});

	// После того как данные YmapsMl-файла загрузятся, вызывается callback-функция.
	var myPlacemark = new ymaps.Placemark(
		// Координаты метки
		[55.776107, 37.648151] , {
			hintContent: 'My Moscow'
		});
	myMap.geoObjects.add(myPlacemark);
}