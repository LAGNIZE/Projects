package main

import (
	"fmt"
	"net/http"
	"encoding/json"
)

type User struct {
	Name     string  `json:"name"`
	LastName string  `json:"last_name"`
	Age      uint8
	Phone    string
	Balance  float32
}

func main() {

	//код для поднятия сервера
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		//задаем заголовок для CORS
		w.Header().Set("Access-Control-Allow-Origin","*")

		//создаем юзера с информацией
		user := User{Name: "John",LastName: "Smith",Age: 25, Phone: "+79653452467", Balance: 200000.56}

		//кодируем информацию в json 
		jsonData, _ := json.Marshal(user)

		//выводим на экран (перед этим преобразовываем в строку)
		fmt.Fprintf(w,string(jsonData))
	
	})
	http.ListenAndServe(":8010", nil)
		
}