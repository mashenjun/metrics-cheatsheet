---
category: memory
aliases: [GO堆外内存, off heap, runtime overhead]
tags: [client_golang, go runtime]
---
# go_memstats_gc_sys_bytes

Number of bytes used for garbage collection system metadata.    

> shows how many in garbage collection metadata.

## Collect from

`runtime.MemStats.GCSys`  

PS：不被runtime内存管理器管理，也不被gc管理。

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L246)
- [代码](https://golang.org/src/runtime/mstats.go#L524)
- [资料](https://povilasv.me/prometheus-go-metrics/#)