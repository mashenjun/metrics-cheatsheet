---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_TWKilled

该指标统计了没有经过正常的TCP_TIMEWAIT_LEN(60s)时长被回收的TIME_WAIT状态下的stocket数量。只有在使用PAWS来判断包是否过期的情况下才会缩短TIME_WAIT的等待时长。  

> * However, if we use PAWS to detect
> * old duplicates, we can reduce the interval to bounds required
> * by RTO, rather than MSL. So, if peer understands PAWS, we
> * kill tw bucket after 3.5*RTO (it is important that this number
> * is greater than TS tick!) and detect old duplicates with help
> * of PAWS.

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/inet_timewait_sock.c#L247)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](https://perthcharles.github.io/2015/11/10/wiki-netstat-proc/)