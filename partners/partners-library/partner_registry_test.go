package partnerslib

import "testing"

func TestVerifyPartner(t *testing.T) {
	got := VerifyPartner("Wayne Corp", "platinum")
	want := "Partner Wayne Corp registered (platinum) — Welcome to Gotham Financial Network"
	if got != want {
		t.Errorf("VerifyPartner(\"Wayne Corp\", \"platinum\") = %q, want %q", got, want)
	}
}
