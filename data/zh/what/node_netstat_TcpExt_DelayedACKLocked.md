---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_DelayedACKLocked

A delayed ACK timer expires, but the TCP stack can't send an ACK immediately due to the socket is locked by a userspace program. The TCP stack will send a pure ACK later (after the userspace program unlock the socket). When the TCP stack sends the pure ACK later, the TCP stack will also update TcpExtDelayedACKs and exit the delayed ACK mode.

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_timer.c#L346)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
