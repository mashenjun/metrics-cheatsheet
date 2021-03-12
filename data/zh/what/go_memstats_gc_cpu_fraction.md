---
category: gc
tags: [client_golang, go runtime]
---
# go_memstats_gc_cpu_fraction

The fraction of this program's available CPU time used by the GC since the program started.

> shows the fraction of this program’s available CPU time used by GC since the program started.

## Collect from

`runtime.MemStats.GCCPUFraction`

> // GCCPUFraction is the fraction of this program's available  
> // CPU time used by the GC since the program started.  
> //  
> // GCCPUFraction is expressed as a number between 0 and 1,  
> // where 0 means GC has consumed none of this program's CPU. A  
> // program's available CPU time is defined as the integral of  
> // GOMAXPROCS since the program started. That is, if  
> // GOMAXPROCS is 2 and a program has been running for 10  
> // seconds, its "available CPU" is 20 seconds. GCCPUFraction  
> // does not include CPU time used for write barrier activity.  

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L278)
- [代码](https://golang.org/src/runtime/mstats.go#L413)
- [资料](https://povilasv.me/prometheus-go-metrics/#)

