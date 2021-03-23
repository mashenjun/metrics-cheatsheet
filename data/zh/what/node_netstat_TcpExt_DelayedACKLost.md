---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_DelayedACKLost

It will be updated when the TCP stack receives a packet which has been ACKed. A Delayed ACK loss might cause this issue, but it would also be triggered by other reasons, such as a packet is duplicated in the network.  
PS: `tcp_send_dupack() -> NET_INC_STATS(sock_net(sk), LINUX_MIB_DELAYEDACKLOST)` 和 `tcp_data_ready() -> NET_INC_STATS(sock_net(sk), LINUX_MIB_DELAYEDACKLOST)`

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24%408419639+LINUX_MIB_DELAYEDACKLOST&patternType=literal)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
