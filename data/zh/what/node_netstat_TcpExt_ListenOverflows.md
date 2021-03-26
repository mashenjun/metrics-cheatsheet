---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_ListenOverflows

When kernel receives a SYN from a client, and if the TCP accept queue is full, kernel will drop the SYN and add 1 to TcpExtListenOverflows. At the same time kernel will also add 1 to TcpExtListenDrops.  
PS: 在通过正常三次握手或者SYN cookie机制下建立链接的时候进行判断，如果`sk_acceptq_is_full()`判断无法添加到accept队列中，计数器加一。

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/torvalds/linux%24%40master+__NET_INC_STATS%28sock_net%28sk%29%2C+LINUX_MIB_LISTENOVERFLOWS%29%3B&patternType=literal)
- [文档](https://github.com/torvalds/linux/blob/master/Documentation/networking/snmp_counter.rst)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
- [资料](http://codefun007.xyz/a/article_detail/985.htm)