package partnerslib

import (
	gothamgocommons "github.com/gotham-financial/gotham-go-commons"
)

// Version returns the library version.
func Version() string {
	return "0.2.0"
}

func VerifyPartner(name string, tier string) string {
	return gothamgocommons.RegisterPartner(name, tier)
}
