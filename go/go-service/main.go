package main

import (
	"fmt"
	"net/http"

	golib "github.com/frontseat-demo/go-library"
)

func main() {
	http.HandleFunc("/greet", func(w http.ResponseWriter, r *http.Request) {
		name := r.URL.Query().Get("name")
		if name == "" {
			name = "World"
		}
		fmt.Fprint(w, golib.FancyGreet(name))
	})

	fmt.Println("Listening on :8080")
	http.ListenAndServe(":8080", nil)
}
