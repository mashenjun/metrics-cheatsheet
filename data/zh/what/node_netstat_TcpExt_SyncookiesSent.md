---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_SyncookiesSent

SYN cookies sent.

> An application wasn't able to accept a connection fast enough, so the kernel couldn't store an entry in the queue for this connection. Instead of dropping it, it sent a cookie to the client


## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](https://satori-monitoring.readthedocs.io/zh/latest/builtin-metrics/tcpext.html#syn-cookies)

