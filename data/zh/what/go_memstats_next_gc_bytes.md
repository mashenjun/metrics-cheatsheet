---
category: gc
tags: [client_golang, go runtime]
---
# go_memstats_next_gc_bytes

Number of heap bytes when next garbage collection will take place.

> shows the target heap size of the next GC cycle. GC’s goal is to keep go_memstats_heap_alloc_bytes less than this value.

## Collect from

`runtime.MemStats.NextGC`

> // NextGC is the target heap size of the next GC cycle.
> //
> // The garbage collector's goal is to keep HeapAlloc ≤ NextGC.
> // At the end of each GC cycle, the target for the next cycle
> // is computed based on the amount of reachable data and the
> // value of GOGC.

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L262)
- [代码](https://golang.org/src/runtime/mstats.go#L555)
- [资料](https://povilasv.me/prometheus-go-metrics/#)

