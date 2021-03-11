---
category: memory
aliases: [解引用次数]
tags: [client_golang, go runtime]
---
# go_memstats_lookups_total

Total number of pointer lookups.

> counts how many pointer dereferences happened. This is a counter value so you can use `rate()` to lookups/s.

## Collect from

`runtime.MemStats.Lookups`

> // Lookups is the number of pointer lookups performed by the
> // runtime.
> //
> // This is primarily useful for debugging runtime internals.

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L118)
- [文档](https://golang.org/pkg/runtime/#MemStats)
- [资料](https://povilasv.me/prometheus-go-metrics/#)