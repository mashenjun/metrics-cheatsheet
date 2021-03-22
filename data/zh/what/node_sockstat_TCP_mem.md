---
category: network
tags: [node_exporter, sockstat]
---
# node_sockstat_TCP_mem

The mem parameters for TCP and UDP is the number of kernel pages allocated.  
PS: 就是`memory_allocated`的值。

## Collect from

`/proc/net/sockstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/sockstat_linux.go#L168)
- [代码](https://github.com/prometheus/procfs/blob/master/net_sockstat.go#L62)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/proc.c#L60)
- [代码](https://github.com/torvalds/linux/blob/master/include/net/sock.h#L1198)
- [资料](https://blog.csdn.net/ffzhihua/article/details/87257228)
- [资料](https://www.unix.com/302388593-post4.html)
