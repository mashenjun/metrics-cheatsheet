---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_heap_idle_bytes

Number of heap bytes waiting to be used.

> shows how many bytes are in idle spans.

## Collect from

`runtime.MemStats.HeapIdle`

> // Idle spans have no objects in them. These spans could be  
> // (and may already have been) returned to the OS, or they can  
> // be reused for heap allocations, or they can be reused as  
> // stack memory.  
> //  
> // HeapIdle minus HeapReleased estimates the amount of memory  
> // that could be returned to the OS, but is being retained by  
> // the runtime so it can grow the heap without requesting more  
> // memory from the OS. If this difference is significantly  
> // larger than the heap size, it indicates there was a recent  
> // transient spike in live heap size.  

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L158)
- [文档](https://golang.org/pkg/runtime/#MemStats)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
