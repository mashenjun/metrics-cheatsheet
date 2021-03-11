---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_heap_objects

Number of allocated objects on heap.

> shows how many objects are allocated on the heap. This changes as GC is performed and new objects are allocated.

## Collect from

`runtime.MemStats.HeapObjects`

> // HeapObjects is the number of allocated heap objects.  
> //  
> // Like HeapAlloc, this increases as objects are allocated and  
> // decreases as the heap is swept and unreachable objects are  
> // freed.  

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L182)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
