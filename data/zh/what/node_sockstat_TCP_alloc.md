---
category: network
tags: [node_exporter, sockstat]
---
# node_sockstat_TCP_alloc

Current number of sockets. 
PS: `alloc`就是对`sockets_allocated`（是一个percpu_counter）的求和。

## Collect from

`/proc/net/sockstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/sockstat_linux.go#L168)
- [代码](https://github.com/prometheus/procfs/blob/master/net_sockstat.go#L62)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/proc.c#L60)
- [代码](https://github.com/torvalds/linux/blob/master/include/net/sock.h#L1199)
- [资料](https://blog.csdn.net/ffzhihua/article/details/87257228)
