---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_stack_sys_bytes

Number of bytes obtained from system for stack allocator.

> shows how many bytes of stack memory is obtained from OS. It’s `go_memstats_stack_inuse_bytes` plus any memory obtained for OS thread stack.  

PS: `go_memstats_stack_sys_bytes` - `go_memstats_stack_inuse_bytes` 可以得到OS Thread的栈的大小。

## Collect from

`runtime.MemStats.StackSys`

> // StackSys is bytes of stack memory obtained from the OS.
> //
> // StackSys is StackInuse, plus any memory obtained directly
> // from the OS for OS thread stacks (which should be minimal).

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L190)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
