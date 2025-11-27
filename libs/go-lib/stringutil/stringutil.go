package stringutil

import "strings"

func IsBlank(s string) bool {
	return len(strings.TrimSpace(s)) == 0
}

func IsNotBlank(s string) bool {
	return !IsBlank(s)
}

func TrimToEmpty(s string) string {
	return strings.TrimSpace(s)
}
