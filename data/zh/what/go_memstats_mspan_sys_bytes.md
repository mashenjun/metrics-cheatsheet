---
category: memory
aliases: [GO堆外内存, off heap, runtime overhead]
tags: [client_golang, go runtime]
---
# go_memstats_mspan_sys_bytes

Number of bytes used for mspan structures obtained from system.

> shows how many bytes are obtained from OS for `mspan` structures.

## Collect from

`runtime.MemStats.MSpanSys`

> // MSpanSys is bytes of memory obtained from the OS for mspan structures.

PS：不被runtime内存管理器管理，也不被gc管理。

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L214)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
