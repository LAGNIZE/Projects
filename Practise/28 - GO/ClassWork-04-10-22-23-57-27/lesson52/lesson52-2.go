package main

import (
	"fmt"
	"net/http"
	"encoding/json"
)

type User struct {
	Name     string  `json:"name"`
	LastName string  `json:"last_name"`
}

func main() {

	//код для поднятия сервера
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		//задаем заголовок для CORS
		w.Header().Set("Access-Control-Allow-Origin","*")

		//получаем json методом get
		jsonData := r.URL.Query().Get("data")

		//создаем юзера пустого
		user := User{}

		//достаем информацию из json 
		//& - говорим ей адрес user
		json.Unmarshal([]byte(jsonData),&user)

		//выводим на экран (перед этим преобразовываем в строку)
		fmt.Println(user)
	
	})
	http.ListenAndServe(":8010", nil)
		
}