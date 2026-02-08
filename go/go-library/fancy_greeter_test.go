package golib

import "testing"

func TestFancyGreet(t *testing.T) {
	got := FancyGreet("World")
	want := "*** Hello, World! ***"
	if got != want {
		t.Errorf("FancyGreet(\"World\") = %q, want %q", got, want)
	}
}
