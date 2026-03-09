package gothamgocommons

import "testing"

func TestRegisterPartner(t *testing.T) {
	got := RegisterPartner("Wayne Corp", "platinum")
	want := "Partner Wayne Corp registered (platinum) — Welcome to Gotham Financial Network"
	if got != want {
		t.Errorf("RegisterPartner(\"Wayne Corp\", \"platinum\") = %q, want %q", got, want)
	}
}
