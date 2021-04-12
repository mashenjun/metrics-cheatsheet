---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_TCPHPAcks

If a packet set ACK flag and has no data, it is a pure ACK packet, if kernel handles it in the fast path, TcpExtTCPHPAcks will increase 1, if kernel handles it in the slow path, TcpExtTCPPureAcks will increase 1.

PS: 调用入口在`tcp_ack()`中 

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_input.c#L3754)
- [文档](https://github.com/torvalds/linux/blob/master/Documentation/networking/snmp_counter.rst)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)