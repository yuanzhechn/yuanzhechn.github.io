# My Blog Frontend

Vue 3 博客前端。文章和训练计划均从独立后端 API 获取，前端不再保存 Markdown 文件。

## 本地启动

先启动后端：

```powershell
cd D:\JetBrainsProject\WebStorm\blog-server
npm run dev
```

再启动前端：

```powershell
cd D:\JetBrainsProject\WebStorm\my-blog
npm run dev -- --host 127.0.0.1
```

默认地址：

- 前端：`http://127.0.0.1:5173`
- 后端：`http://127.0.0.1:3000`
- 发布工作台：`http://127.0.0.1:5173/admin`

API 地址通过 `VITE_API_BASE_URL` 配置，参考 `.env.example`。

## 检查

```powershell
npm run build
npm run lint
```
