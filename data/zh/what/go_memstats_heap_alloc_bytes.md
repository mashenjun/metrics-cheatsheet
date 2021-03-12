---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_heap_alloc_bytes

Number of bytes allocated and still in use.

PS: mheap和mcache allocate出去的bytes减去free回来的bytes。

> same as `go_memstats_alloc_bytes`.

PS: `go_memstats_alloc_bytes`不包含off-heap memory。

## Collect from

`runtime.MemStats.HeapAlloc`

> // "Allocated" heap objects include all reachable objects, as  
> // well as unreachable objects that the garbage collector has  
> // not yet freed.  

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L94)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
