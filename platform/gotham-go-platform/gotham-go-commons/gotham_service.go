package gothamgocommons

import "fmt"

// Version returns the library version.
func Version() string {
	return "0.2.0"
}

func RegisterPartner(name string, tier string) string {
	return fmt.Sprintf("Partner %s registered (%s) — Welcome to Gotham Financial Network", name, tier)
}
