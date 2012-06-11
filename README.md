HTML5 WEB WORKERS
=================
---

WEB WORKERS
===========

Web Workers are desinged to bring multithreading to JavaScript.

They are `isolated` threads that can concurrently perform work.

Why use Web Workers:
--------------------

- Background Tasks
- Parallelism
- Synchronization
- Maximize the potential of available hardware
- Isolation and segregation of responsibilities

---

WEB WORKERS LIMITATIONS
=======================

As with any other language feature that uses threads or processes there are limitations. 

Most of the limitations come from UI elements.

You can `not` use Web Workers when manipulating:
------------------------------------------------

- DOM
- Window
- Parent
- Document

---

TYPES OF WEB WORKERS
====================

There are two types of Web Workers specifically designed for different tasks.

Types:
------------------------------------------------
- Dedicated Workers
- Shared Workers


Tasks:
------------------------------------------------
- Background work
- IPC

---

WEB WORKER CANDY
=================

- Dynamic External Script Loading
- SubWorkers
- Blob Manipulation
- Inline Workers using Blobs

---