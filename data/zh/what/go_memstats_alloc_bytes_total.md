---
category: memory
tags: [client_golang, go runtime]
---
# go_memstats_alloc_bytes_total

Total number of bytes allocated, even if freed.

> this metric increases as objects are allocated in the Heap, but doesn’t decrease when they are freed.

## Collect from

`runtime.MemStats`

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L102)
- [资料](https://povilasv.me/prometheus-go-metrics/#)

