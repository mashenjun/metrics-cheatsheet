---
category: memory
aliases: [physical memory, OS视角下的进程物理内存]
tags: [client_golang, process]
---
# process_resident_memory_bytes

Resident memory size in bytes.

> multiplies `rss` – resident set memory size is number of memory pages the process has in real memory, with pagesize 4. This results in the amount of memory that belongs specifically to that process in bytes. This excludes swapped out memory pages.

## Collect from

`/proc/PID/stat` on Linux

## Links

- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/process_collector.go#L32)
- [代码](https://github.com/prometheus/client_golang/blob/master/prometheus/process_collector_other.go#L43)
- [资料]](https://docs.pingcap.com/zh/tidb/stable/glossary#regionpeerraft-group)
