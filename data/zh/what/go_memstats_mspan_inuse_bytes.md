---
category: memory
aliases: [GO堆外内存, off heap, runtime overhead]
tags: [client_golang, go runtime]
---
# go_memstats_mspan_inuse_bytes

Number of bytes in use by mspan structures.

> shows how many bytes are in use by `mspan` structures.

## Collect from

`runtime.MemStats.MSpanInuse`

> // MSpanInuse is bytes of allocated mspan structures.

PS：不被runtime内存管理器管理，也不被gc管理。

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L206)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
