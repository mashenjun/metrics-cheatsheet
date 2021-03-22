---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_PAWSActive

Packets are dropped by PAWS in Syn-Sent status.  
PS: PAWSActive只有在`Syn-Sent`阶段被统计（针对SYN的ACK进行的PAWS校验），也就是说只有在主动建立链接的一方进行统计。

> PAWS (Protection Against Wrapped Sequence numbers) is an algorithm
> which is used to drop old packets. It depends on the TCP
> timestamps. For detail information, please refer the [timestamp wiki](https://tools.ietf.org/html/rfc1323#page-17)
> and the [RFC of PAWS](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_timestamps).

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_input.c#L6066)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
