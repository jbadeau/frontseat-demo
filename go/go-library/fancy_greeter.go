package golib

import (
	"fmt"

	commongolib "github.com/frontseat-demo/common-go-library"
)

// Version returns the library version.
func Version() string {
	return "0.2.0"
}

func FancyGreet(name string) string {
	return fmt.Sprintf("*** %s ***", commongolib.Greet(name))
}
