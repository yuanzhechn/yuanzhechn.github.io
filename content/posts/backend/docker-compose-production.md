---
title: Docker Compose 在生产环境中的最佳实践
slug: docker-compose-production
date: 2024-11-20
updated: 2024-11-22
category: backend
tags:
  - docker
  - nodejs
excerpt: 分享团队在生产环境中使用 Docker Compose 管理多容器应用的经验，包括日志管理、监控、备份等关键环节。
isTop: false
isPublished: true
author: 博主
---

## 生产环境考量

虽然很多文章说 Docker Compose 不适合生产，但经过合理配置，它完全可以胜任中小规模的生产部署。

## 日志管理

使用 `json-file` 驱动 + logrotate：

```yaml
services:
  app:
    logging:
      driver: json-file
      options:
        max-size: '10m'
        max-file: '3'
```

## 健康检查

```yaml
services:
  api:
    healthcheck:
      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']
      interval: 30s
      timeout: 10s
      retries: 3
```

## 资源限制

```yaml
services:
  app:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 256M
        reservations:
          cpus: '0.25'
          memory: 128M
```

## 数据备份

定期备份数据库和持久化卷：

```bash
# 每日备份脚本
docker exec postgres pg_dump -U user dbname > backup.sql
```

> 生产环境中，自动化备份是必不可少的一环。

## 总结

合理配置 Docker Compose 后，它完全能胜任中小型项目的生产部署需求。关键是做好日志、监控、备份三件事。
