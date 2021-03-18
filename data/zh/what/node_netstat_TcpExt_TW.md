---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_TW

经过正常的TCP_TIMEWAIT_LEN(60s)结束TW状态的socket数量。  
PS: 这个指标不是TIME_WAIT数量。无法反应当前系统中有多少在TIME_WAIT状态的socket数量。

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/inet_timewait_sock.c#L144)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](https://satori-monitoring.readthedocs.io/zh/latest/builtin-metrics/tcpext.html#id1)
- [资料](https://perthcharles.github.io/2015/11/10/wiki-netstat-proc/)