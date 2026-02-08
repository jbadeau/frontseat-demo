package golib

import (
	"fmt"

	commongolib "github.com/frontseat-demo/common-go-library"
)

func FancyGreet(name string) string {
	return fmt.Sprintf("*** %s ***", commongolib.Greet(name))
}
