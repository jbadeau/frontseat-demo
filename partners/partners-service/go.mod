module github.com/gotham-financial/partners-service

go 1.21

require (
	github.com/gotham-financial/partners-library v0.0.0
	github.com/gotham-financial/gotham-go-commons v0.0.0
)

replace (
	github.com/gotham-financial/partners-library => ../partners-library
	github.com/gotham-financial/gotham-go-commons => ../../platform/gotham-go-platform/gotham-go-commons
)
