---
category: scheduler
tags: [client_golang, go runtime]
---
# go_threads

Number of OS threads created.  
PS: 也就是全局M的数量。

> calls out to runtime.CreateThreadProfile(), which reads off global `allm`（全局m链表） variable.

## Collect from

`runtime.ThreadCreateProfile(nil)`

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L318)
- [资料](https://povilasv.me/prometheus-go-metrics/#)

