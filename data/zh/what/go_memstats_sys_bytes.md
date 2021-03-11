---
category: memory
aliases: [进程虚拟内存]
tags: [client_golang, go runtime]
---
# go_memstats_sys_bytes

Number of bytes obtained from system.
PS: 统计的也是虚拟内存

> it’s a metric, which measures how many bytes of memory in total is taken from system by Go. It sums all the sys metrics including `go_memstats_heap_sys_bytes`, `go_memstats_stack_sys_bytes`, `go_memstats_mspan_sys_bytes`, `go_memstats_mcache_sys_bytes`, `go_memstats_buck_hash_sys_bytes`, `go_memstats_gc_sys_bytes`, `go_memstats_other_sys_bytes`.

## Collect from

`runtime.MemStats.Sys`

> // Sys is the sum of the XSys fields below. Sys measures the
> // virtual address space reserved by the Go runtime for the
> // heap, stacks, and other internal data structures. It's
> // likely that not all of the virtual address space is backed
> // by physical memory at any given moment, though in general
> // it all was at some point.

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L110)
- [文档](https://golang.org/pkg/runtime/#MemStats)
- [资料](https://povilasv.me/prometheus-go-metrics/#)