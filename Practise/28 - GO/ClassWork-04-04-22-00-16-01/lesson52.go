package main

import (
	"fmt"
	"encoding/json"
	"net/http"
)

type User struct {
	Name string `json:"name"`
	LastName string
	Age uint8
	Phone string
	Balance float32
}

	// код для поднятия сервера
	func main() {		
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			// заголовок для CORS	
			w.Header().Set("Access-Control-Allow-Origin","*")
			// cсоздаём юзера с информацией
			user := User{ Name: "John", LastName: "Smith", Age: 25, Phone: "+79137727564", Balance: 3.32}
			// кодируем информацию в JSON
			jsonData, _ := json.Marshal(user)
			fmt.Fprintf(w,string(jsonData))
		})
		http.ListenAndServe(":8010", nil)
	  }