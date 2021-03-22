---
category: network
tags: [node_exporter, sockstat]
---
# node_sockstat_TCP_mem_bytes

该指标就是 `node_sockstat_TCP_mem` 乘以page size后的值。

## Collect from

`/proc/net/sockstat` on Linux

## Links

- [代码](https://github.com/prometheus/node_exporter/blob/master/collector/sockstat_linux.go#L154)
- [代码](https://github.com/prometheus/procfs/blob/master/net_sockstat.go#L62)
- [资料](https://blog.csdn.net/ffzhihua/article/details/87257228)
- [资料](https://www.unix.com/302388593-post4.html)
