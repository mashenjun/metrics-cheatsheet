---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_heap_released_bytes

Number of heap bytes released to OS.

> shows how many bytes of idle spans were returned to the OS.

## Collect from

`runtime.MemStats.HeapReleased`

> // HeapReleased is bytes of physical memory returned to the OS.  
> //  
> // This counts heap memory from idle spans that was returned  
> // to the OS and has not yet been reacquired for the heap.  

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L174)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
