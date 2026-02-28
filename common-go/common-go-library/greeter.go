package commongolib

import "fmt"

// Version returns the library version.
func Version() string {
	return "0.2.0"
}

func Greet(name string) string {
	return fmt.Sprintf("Hello, %s!", name)
}
