---
category: network
tags: [node_exporter, netstat]
---
# node_netstat_TcpExt_TCPHPHits

If a TCP packet has data (which means it is not a pure ACK packet), and this packet is handled in the fast path, TcpExtTCPHPHits will increase 1.

> 	TCP receive function for the ESTABLISHED state.  
>
> 	It is split into a fast path and a slow path. The fast path is disabled when:  
> 	- A zero window was announced from us - zero window probing is only handled properly in the slow path.  
> 	- Out of order segments arrived.  
> 	- Urgent data is expected.  
> 	- There is no buffer space left.  
> 	- Unexpected TCP flags/window values/header lengths are received (detected by checking the TCP header against pred_flags).  
> 	- Data is sent in both directions. Fast path only supports pure senders or pure receivers (this means either the sequence number or the ack value must stay constant).  
> 	- Unexpected TCP option. 
> 
> 	When these conditions are not satisfied it drops into a standard receive procedure patterned after RFC793 to handle all cases.  
> 	The first three cases are guaranteed by proper pred_flags setting, the rest is checked inline. Fast processing is turned on in tcp_data_queue when everything is OK.  

## Collect from

`/proc/net/netstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/netstat_linux.go#L97)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_input.c#L5830)
- [文档](https://github.com/torvalds/linux/blob/master/Documentation/networking/snmp_counter.rst)
- [资料](https://github.com/moooofly/MarkSomethingDown/blob/master/Linux/TCP%20%E7%9B%B8%E5%85%B3%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E8%AF%A6%E8%A7%A3.md)