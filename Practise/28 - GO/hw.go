package main

import (
	"fmt"
	"encoding/json"
	"net/http"
)

type Granted interface {
	addGb()
}

type Phone struct {
	Model string 
	RAM string 
}

func (p *Phone) addGb() {
	p.RAM = p.RAM + " Gb"
}

func allowToAdd(user Granted) {
	user.addGb()
}

type Err struct {
	Msg string
}

	func main() {		
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin","*")
			jsonData := r.URL.Query().Get("type")
			phone := &Phone{Model:"Xiaomi",RAM:"8"}
			err := Err{Msg: "Type of item is wrong"}
			if jsonData == "phone" {
				allowToAdd(phone)
				jsonData, _ := json.Marshal(phone)
				fmt.Fprintf(w,string(jsonData))
			} else {
				jsonData, _ := json.Marshal(err)
				fmt.Fprintf(w,string(jsonData))
			}
		})
		http.ListenAndServe(":8010", nil)
	  }