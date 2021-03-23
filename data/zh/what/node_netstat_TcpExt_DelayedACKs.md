---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_DelayedACKs

A delayed ACK timer expires. The TCP stack will send a pure ACK packet and exit the delayed ACK mode.
PS: `tcp_delack_timer_handler() -> __NET_INC_STATS(sock_net(sk), LINUX_MIB_DELAYEDACKS)`  
## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_timer.c#L318)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
