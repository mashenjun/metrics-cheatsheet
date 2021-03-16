---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_EmbryonicRsts.md

Invalid packet received for a connection in the SYN_RECV state.  
在`SYN_RECV`状态收到带 RST/SYN 标记的包个数。只有在`tcp_fastopen`没有开启的情况下才会统计。  

PS: `/proc/sys/net/ipv4/tcp_fastopen` controle the kernel setting. `setsockopt()` with `TCP_FASTOPEN` controle socket setting. 

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_minisocks.c#L808)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](https://satori-monitoring.readthedocs.io/zh/latest/builtin-metrics/tcpext.html#id1)
- [资料](https://loicpefferkorn.net/2018/09/linux-network-statistics-reference/)

