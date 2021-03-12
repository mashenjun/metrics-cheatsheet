---
category: gc
tags: [client_golang, go runtime]
---
# go_gc_duration_seconds

A summary of the pause duration of garbage collection cycles.

> calls out to debug.ReadGCStats() with PauseQuantile set to 5, which returns us the minimum, 25%, 50%, 75%, and maximum pause times. Then it manualy creates a Summary type from pause quantiles, NumGC var and PauseTotal seconds.

## Collect from

```
debug.GCStats.NumGC, debug.GCStats.PauseTotal.Seconds(), debug.GCStats.PauseQuantiles
```

PS: debug.GCStats.PauseTotal.Seconds() 就是对gc中stw的时间统计。

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/go_collector.go#L329)
- [代码](https://golang.org/src/runtime/mstats.go#L555)
- [资料](https://povilasv.me/prometheus-go-metrics/#)

