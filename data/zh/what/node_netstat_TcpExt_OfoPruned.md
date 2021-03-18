---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_OfoPruned

Increased on clean of the out-of-order queue of a struct `tcp_sock`.  
由于接收缓存空间不足（sk->sk_rcvbuf不足）而进行tcp无序数据回收（prune sk->out_of_order_queue）的次数.

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_input.c#L5257)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)

