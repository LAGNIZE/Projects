package main

import (
	"fmt"
	"encoding/json"
	"net/http"
)

type School struct {
	Name string 
	City string 
	Street string
	Apt string
}

type Err struct {
	Msg string
}

	func main() {		
		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin","*")
			jsonData := r.URL.Query().Get("school")
			school := School{Name:"Nordic IT",City:"Moscow",Street:"Spasskaya",Apt:"51"}
			err := Err{Msg: "Incorrect URL"}
			if jsonData == "nordic" {
				jsonData, _ := json.Marshal(school)
				fmt.Fprintf(w,string(jsonData))
			} else {
				jsonData, _ := json.Marshal(err)
				fmt.Fprintf(w,string(jsonData))
			}
		})
		http.ListenAndServe(":8010", nil)
	  }