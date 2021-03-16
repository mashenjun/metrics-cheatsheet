---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_OutOfWindowIcmps.md

ICMP协议栈收到差错报文时，对于某些类型（ICMP_DEST_UNREACH, ICMP_TIME_EXCEED, ICMP_QUENCH）的差错报文需要传给传输层（tcp协议栈）。  
如果差错报文中所包含的tcp信息无法通过序列号的校验，tcp协议栈不会处理该次ICMP的差错报文，并统计在`LINUX_MIB_OUTOFWINDOWICMPS`中。   
所以`OutOfWindowIcmps`就是对收到上述情况的ICMP差错报文的数量统计。

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_ipv4.c#L463)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/icmp.c#L943)
- [资料](https://github.com/run/kernel-tcp/blob/master/linux-net-kernel/net/ipv4/tcp_ipv4.c#L445)
- [资料](https://tools.ietf.org/html/rfc1122#page-39)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
