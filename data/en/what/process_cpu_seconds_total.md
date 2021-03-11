---
category: cpu
aliases: [cpu usage]
tags: [client_golang]
---
# process_cpu_seconds_total

Total user and system CPU time spent in seconds.
> it uses utime – number of ticks executing code in user mode, measured in jiffies, with stime – jiffies spent in the system mode, executing code on behalf of the process (like doing system calls). A jiffy is the time between two ticks of the system timer interrupt. 

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/process_collector.go#L29)
- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/process_collector_other.go#L41)
- [资料](https://povilasv.me/prometheus-go-metrics/#)