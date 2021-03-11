---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_heap_sys_bytes

Number of heap bytes obtained from system.

> bytes of memory obtained for the heap(arena) from OS. This includes virtual address space that has been resevered, but not yet used and virtual address space which was returned to OS after it became unused. This metric estimates the largest size the heap.

## Collect from

`runtime.MemStats.HeapSys`

> // HeapSys measures the amount of virtual address space  
> // reserved for the heap. This includes virtual address space  
> // that has been reserved but not yet used, which consumes no  
> // physical memory, but tends to be small, as well as virtual  
> // address space for which the physical memory has been  
> // returned to the OS after it became unused (see HeapReleased  
> // for a measure of the latter).  

PS: HeapSys increase when `sysAlloc()` and `sysMap()` is called. HeapSys decrease when `sysFree()` is called.  
PS: HeapSys 不包含off-heap memory


## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L150)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
