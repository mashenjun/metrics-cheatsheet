---
category: network
tags: [node_exporter, sockstat]
---
# node_sockstat_TCP_orphan

Count of current orphan socket.  

> When an application closes a TCP connection, kernel still need to track the connection, let it complete the TCP disconnect process. E.g. an app calls the close method of a socket, kernel sends fin to the other side of the connection, then the app has no relationship with the socket any more, but kernel need to keep the socket, this socket becomes an orphan socket, kernel waits for the reply of the other side, and would come to the TIME_WAIT state finally.  
PS: 对`tcp_orphan_count`（是一个percpu_counter）的求和。

## Collect from

`/proc/net/sockstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/sockstat_linux.go#L168)
- [代码](https://github.com/prometheus/procfs/blob/master/net_sockstat.go#L62)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/proc.c#L60)
- [资料](https://blog.csdn.net/ffzhihua/article/details/87257228)
- [文档](https://github.com/torvalds/linux/blob/master/Documentation/networking/snmp_counter.rst)
