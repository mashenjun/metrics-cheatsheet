---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_SyncookiesFailed

Num of invalid SYN cookies received.

> After sending a cookie, it came back to us but looked invalid.


## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](https://satori-monitoring.readthedocs.io/zh/latest/builtin-metrics/tcpext.html#syn-cookies)

