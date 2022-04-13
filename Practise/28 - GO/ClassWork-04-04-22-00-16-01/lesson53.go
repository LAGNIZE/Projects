// Generate GO

package main

import (
	"fmt"
	"encoding/json"
	"net/http"
)

type Laptop struct {
	Mark string `json:"mark"`
	Model string `json:"model"`
	Color string `json:"color"`
	Weight float32 `json:"weight"`
	Display Display
	CPU CPU
	RAM RAM
	Storage Storage
}

type Display struct {
	Resolution string
	Type string
}

type CPU struct {
	Clock float32
	Cores uint8
}

type RAM struct {
	Frequency float32 
	Volume uint16
}

type Storage struct {
	Type string
	Volume string
}

func main() {
	// код для поднятия сервера		
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			// заголовок для CORS	
			w.Header().Set("Access-Control-Allow-Origin","*")
			laptops := []Laptop{}
			// cсоздаём юзера с информацией
			laptop1 := Laptop{}
			laptop1.Mark = "Lenovo"
			laptop1.Model = "ThinkBook 14"
			laptop1.Color = "grey"
			laptops = append(laptops, laptop1)
			// кодируем информацию в JSON
			jsonData, _ := json.Marshal(laptops)
			fmt.Fprintf(w,string(jsonData))
		})
		http.ListenAndServe(":8010", nil)
	}