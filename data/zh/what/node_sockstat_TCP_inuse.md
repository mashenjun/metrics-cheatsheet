---
category: network
tags: [node_exporter, sockstat]
---
#  node_sockstat_TCP_inuse

Socket having TCP states except TCP_CLOSE is counted as 'inuse'.

## Collect from

`/proc/net/sockstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/sockstat_linux.go#L168)
- [代码](https://github.com/prometheus/procfs/blob/master/net_sockstat.go#L62)
- [代码](https://github.com/torvalds/linux/blob/master/net/ipv4/proc.c#L60)
- [资料](https://blog.csdn.net/ffzhihua/article/details/87257228)
- [资料](https://stackoverflow.com/questions/55405727/in-proc-sockstat-which-tcp-states-count-as-inuse-and-which-count-as-alloc)
