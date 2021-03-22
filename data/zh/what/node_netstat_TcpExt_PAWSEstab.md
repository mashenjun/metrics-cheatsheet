---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_PAWSEstab

Packets are dropped by PAWS in any status other than Syn-Sent.  
PS: 建立链接之后的各个状态下校验失败的次数。
PS:调用时机`tcp_timewait_state_process()`，`tcp_check_req()`，`tcp_reset_check()`

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_input.c#L6066)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)
