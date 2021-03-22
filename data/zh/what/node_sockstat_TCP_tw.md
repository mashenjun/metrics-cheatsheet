---
category: network
tags: [node_exporter, sockstat]
---
# node_sockstat_TCP_tw

当前系统中TIME_WAIT状态下的socket数量
PS: 注意和`node_netstat_TcpExt_TW`的区别。

## Collect from

`/proc/net/sockstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/sockstat_linux.go#L168)
- [代码](https://github.com/prometheus/procfs/blob/master/net_sockstat.go#L62)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/proc.c#L60)
- [代码](https://sourcegraph.com/github.com/torvalds/linux@0d02ec6/-/blob/include/net/netns/ipv4.h?subtree=true#L35:12&tab=references)
- [资料](https://blog.csdn.net/ffzhihua/article/details/87257228)
