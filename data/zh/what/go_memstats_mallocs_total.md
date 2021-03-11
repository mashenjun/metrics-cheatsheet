---
category: memory
tags: [client_golang, go runtime]
---
# go_memstats_mallocs_total

Total object number of mallocs.

> shows how many heap objects are allocated. This is a counter value so you can use `rate()` to objects allocated/s.

## Collect from

`runtime.MemStats.Mallocs`

> // Mallocs is the cumulative count of heap objects allocated.
> // The number of live objects is Mallocs - Frees.

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L126)
- [文档](https://golang.org/pkg/runtime/#MemStats)
- [资料](https://povilasv.me/prometheus-go-metrics/#)