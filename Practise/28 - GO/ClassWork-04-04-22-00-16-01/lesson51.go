package main

import (
  "fmt"
  "net/http"
  "os"
)

func main() {
  //конфигурируем сервер из пакета http
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

	//получаем GET параметр
	name := r.URL.Query().Get("name")
	lastName := r.URL.Query().Get("last_name")
	//r - объект который знает все о запросе
	//URL     - свойство в котором лежит адресная строка
	//Query() - метод который достает только GET параметры из строки
	//Get()   - метод который получает значение праметра по названию 

	//выводи ответ
    fmt.Fprintf(w, "Имя которое ввели " + name)
	fmt.Fprintf(w, "Фамилия которую ввели " + lastName)


	//если параметр не пустой
	if (name != "") {
		//создаем файл и сохраняем туда данные
		//Create() вовращает сразу ДВА значения - ссылку на файл и ошибку
		// _ - пустой вывод те выкидываем ошибку - нам она ненужна
		file, _ := os.Create("test.txt");

		//записываем данные
		//[]byte() - преобразуем строку в срез байт
		file.Write([]byte(name))
	}

	for i:= 0; i < 100; i++ {
		go getServerData("https://google.com")
	}


  })
  //запускаем сервер
  http.ListenAndServe(":8000", nil)
}

//функция умеет спрашивать сервер скажите только куда идти)
func getServerData(url string) {

	//идем на сервере и получаем данные
	resp, _ := http.Get(url) 

	fmt.Println(resp)
}