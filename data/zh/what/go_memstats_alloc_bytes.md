---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_alloc_bytes

Number of bytes allocated and still in use.

> a metric which shows how much bytes of memory is allocated on the Heap for the Objects. The value is same as `go_memstats_heap_alloc_bytes`. This metric counts all reachable heap objects plus unreachable objects, GC has not yet freed.

PS: `go_memstats_alloc_bytes`不包含GO堆外内存。

## Collect from

`runtime.MemStats`

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L94)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
