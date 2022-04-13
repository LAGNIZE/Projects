package main

import (
	"fmt"
)

type Granted interface {
	sayHi()
}

type Admin struct {

}

func (a Admin) sayHi() {
	fmt.Println("Привет, я Админ")
}

type Moderator struct {

}

type Visitor struct {

}

func main() {
	admin := Admin{}
	// moderator := Moderator{}
	// visitor := Visitor{}
	allowToEnter(admin)
}

func allowToEnter(user Granted) {
	user.sayHi()
}