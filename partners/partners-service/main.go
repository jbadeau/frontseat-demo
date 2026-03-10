package main

import (
	"fmt"
	"net/http"

	partnerslib "github.com/gotham-financial/partners-library"
)

const version = "0.2.0"

func main() {
	http.HandleFunc("/version", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, version)
	})

	http.HandleFunc("/register", func(w http.ResponseWriter, r *http.Request) {
		name := r.URL.Query().Get("name")
		if name == "" {
			name = "Unknown"
		}
		tier := r.URL.Query().Get("tier")
		if tier == "" {
			tier = "standard"
		}
		fmt.Fprint(w, partnerslib.VerifyPartner(name, tier))
	})

	fmt.Println("Listening on :8080")
	http.ListenAndServe(":8080", nil)
}
