---
category: memory
aliases: [GO堆外内存, off heap, runtime overhead]
tags: [client_golang, go runtime]
---
# go_memstats_other_sys_bytes

Number of bytes used for other system allocations.  

> shows how many bytes of memory are used for other runtime allocations.

## Collect from

`runtime.MemStats.OtherSys`  

PS：`arenaHints` + `specialfinalizer` + `specialprofile` 的btyes大小。  
PS：不被runtime内存管理器管理，也不被gc管理。

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L246)
- [代码](https://golang.org/src/runtime/mheap.go#L707)
- [资料](https://povilasv.me/prometheus-go-metrics/#)