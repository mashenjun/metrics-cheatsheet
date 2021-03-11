---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_heap_inuse_bytes

Number of heap bytes that are in use.

> shows how many bytes in in-use spans.

## Collect from

`runtime.MemStats.HeapInuse`

> // In-use spans have at least one object in them. These spans  
> // can only be used for other objects of roughly the same  
> // size.  
> //  
> // HeapInuse minus HeapAlloc estimates the amount of memory  
> // that has been dedicated to particular size classes, but is  
> // not currently being used. This is an upper bound on  
> // fragmentation, but in general this memory can be reused  
> // efficiently.  

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L166)
- [文档](https://golang.org/pkg/runtime/#MemStats)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
