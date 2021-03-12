---
category: scheduler
tags: [client_golang, go runtime]
---
# go_goroutines

Number of goroutines that currently exist.  
PS: 并不是所有g的数量，而是`gcount()`的返回值。其含义是：所有g的数量 - 系统g - 缓存中状态为Gdead的g。

> calls out to `runtime.NumGoroutine()`, which computes the value based off the scheduler struct and global `allglen` variable.  As all the values in sched struct can be changed concurently there is this funny check where if computed value is less than 1 it becomes 1.

## Collect from

`runtime.NumGoroutine()`

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L316)
- [资料](https://povilasv.me/prometheus-go-metrics/#)

