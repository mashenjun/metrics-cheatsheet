---
category: memory
aliases: [GO堆]
tags: [client_golang, go runtime]
---
# go_memstats_stack_inuse_bytes

Number of bytes in use by the stack allocator.

> shows how many bytes of memory is used by stack memory spans, which have atleast one object in them.

## Collect from

`runtime.MemStats.StackInuse`

> // StackInuse is bytes in stack spans.  
> //  
> // In-use stack spans have at least one stack in them. These  
> // spans can only be used for other stacks of the same size.  
> //  
> // There is no StackIdle because unused stack spans are  
> // returned to the heap (and hence counted toward HeapIdle).  

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L190)
- [文档](https://golang.org/src/runtime/mstats.go)
- [资料](https://povilasv.me/prometheus-go-metrics/#)
