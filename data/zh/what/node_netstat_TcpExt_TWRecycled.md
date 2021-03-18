---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_TWRecycled

when a connection is reused (net.ipv4.tcp_tw_reuse = 1), the `TWRecycled` counter is increased.  
PS: TWRecycled只有在建立链接的时候进行统计。

> tcp_tw_reuse - INTEGER
> 	Enable reuse of TIME-WAIT sockets for new connections when it is
> 	safe from protocol viewpoint.
> 
> 	- 0 - disable
> 	- 1 - global enable
> 	- 2 - enable for loopback traffic only
> 
> 	It should not be changed without advice/request of technical
> 	experts.
> 
> 	Default: 2

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/inet_hashtables.c#L487)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](https://perthcharles.github.io/2015/11/10/wiki-netstat-proc/)
- [文档](https://github.com/torvalds/linux/blob/master/Documentation/networking/ip-sysctl.rst)