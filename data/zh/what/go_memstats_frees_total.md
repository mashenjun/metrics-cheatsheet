---
category: memory
tags: [client_golang, go runtime]
---
# go_memstats_frees_total

Total object number of frees.

> shows how many heap objects are freed. This is a counter value so you can use rate() to objects allocated/s. Note you can get number of live objects with `go_memstats_mallocs_total` – `go_memstats_frees_total`.

## Collect from

`runtime.MemStats.Frees`

> // Frees is the cumulative count of heap objects freed.

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L134)
- [文档](https://golang.org/pkg/runtime/#MemStats)
- [资料](https://povilasv.me/prometheus-go-metrics/#)