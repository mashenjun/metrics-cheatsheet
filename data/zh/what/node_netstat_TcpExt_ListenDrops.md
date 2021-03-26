---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_ListenDrops

When a TCP socket is in LISTEN state, and kernel need to drop a packet, kernel would always add 1 to TcpExtListenDrops.   
So increase TcpExtListenOverflows would let TcpExtListenDrops increasing at the same time, but TcpExtListenDrops would also increase without TcpExtListenOverflows increasing.  
PS: 这是基于包维度的统计。除了建立链接失败时计数器加一，其他多个场景下导致包drop的话也会加一。具体的调用点为：`tcp_conn_request()`，`tcp_req_err()`，`tcp_v4_conn_request()`，`tcp_v4_syn_recv_sock()`

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/include/net/tcp.h#L2177)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
