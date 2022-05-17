package main

import (
	"fmt"
	"database/sql"
	"encoding/json"
	"net/http"
	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	Id int
	Name string
	Age int
	Salary int
}

func main() {		
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin","*")
		db, _ := sql.Open("mysql","root:@/godb")
		defer db.Close()
		// db.Exec("INSERT INTO `users` (`name`, `surname`, `job`) VALUES ('Jon', 'Smith', 'salor');")
		rows, _ := db.Query("SELECT * FROM godb.users")
		users := []User{}
		for rows.Next() {
			user := User{}
			rows.Scan(&user.Id,&user.Name,&user.Age,&user.Salary)
			users = append(users,user)
		}
		jsonData, _ := json.Marshal(users)
		fmt.Fprintf(w,string(jsonData))
	})
	http.ListenAndServe(":8010", nil)
}