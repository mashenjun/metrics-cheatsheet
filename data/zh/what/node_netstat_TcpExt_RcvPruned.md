---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_RcvPruned

Increased when the tentative to reduce socket allocated memory failed, data is dropped.  
由于接收缓存空间不足（sk->sk_rcvbuf不足）而进行tcp内存回收（prune sk->receive_queue和sk->out_of_order_queue）后空间还是不够的次数.  

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_input.c#L5330)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](https://loicpefferkorn.net/2018/09/linux-network-statistics-reference/)