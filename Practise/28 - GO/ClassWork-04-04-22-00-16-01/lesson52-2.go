package main

import (
	"fmt"
	"encoding/json"
	"net/http"
)

type User struct {
	Name string `json:"name"`
	LastName string `json:"last_name"`
}

	// код для поднятия сервера
	func main() {		
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			// заголовок для CORS	
			w.Header().Set("Access-Control-Allow-Origin","*")
			// получаем JSON методом get
			jsonData := r.URL.Query().Get("data")
			// cоздаём пустого юзера
			user := User{}
			// кодируем информацию в JSON; & - говорим ей адрес юзера (указатель)
			json.Unmarshal([]byte(jsonData), &user)
			// fmt.Println(user)
			fmt.Fprintf(w,string(jsonData))
		})
		http.ListenAndServe(":8010", nil)
	  }