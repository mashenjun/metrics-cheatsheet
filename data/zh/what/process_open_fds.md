---
category: cpu
aliases: [cpu usage, open fds]
tags: [client_golang, process]
---
# process_open_fds

Number of open file descriptors.

## Collect from

`/proc/PID/fd` on Linux  

PS: `/proc/PID/fd`目录下的文件数量。

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/process_collector.go#L80)
- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/process_collector_other.go#L54)
- [代码](https://github.com/prometheus/procfs/blob/master/proc.go#L293)
- [资料](https://povilasv.me/prometheus-go-metrics/#)