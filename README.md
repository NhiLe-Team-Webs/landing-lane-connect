# test.nedu.vn — Nedu Report Viewer.

**Vite + React** SPA hiển thị kết quả assessment sau khi user làm xong quiz ở **test.nhi.sg**.  
Không có backend riêng — chỉ fetch data từ API của test.nhi.sg theo token.

---

## How it works

```
User được redirect từ test.nhi.sg tới /report/{token}
  → app fetch GET {VITE_API_URL}/api/report/{token}
  → hiển thị kết quả: persona, khoá học gợi ý, next steps
```

Stack: Vite · React · shadcn/ui · Cloudflare Workers (deploy tĩnh)

---

## Setup

```bash
npm install
cp .env .env.local      # hoặc tạo file .env với nội dung bên dưới
npm run dev             # http://localhost:8080
```

### Env vars (`.env`)

| Biến | Bắt buộc | Giá trị |
|------|----------|---------|
| `VITE_API_URL` | ✅ | Local: `http://localhost:3000` · Prod: `https://test.nhi.sg` |
| `VITE_IFRAME_URL` | ⚠️ optional | URL embed iframe nếu có |
| `VITE_NEDU_URL` | ⚠️ optional | Self-reference nếu cần |
| `VITE_TEST_URL` | ⚠️ optional | Dùng trong test |

---

## Deploy (Cloudflare Workers — static)

```bash
npm run build           # output vào dist/
npx wrangler deploy     # deploy static site lên Cloudflare
```

Cấu hình trong `wrangler.toml`:
- Worker name: `nedu-test-report`
- SPA mode: mọi route không tìm thấy file → trả về `index.html`

---

## Link với test.nhi.sg

Repo này **chỉ là viewer** — không có API, không có DB riêng.  
Toàn bộ data lấy từ `VITE_API_URL` (= test.nhi.sg).

| Repo | Vai trò | Port local |
|------|---------|-----------|
| **test.nhi.sg** | Quiz app + API + DB | `3000` |
| **test.nedu.vn** | Report viewer (repo này) | `8080` |

Khi chạy local cả 2, set trong test.nhi.sg:
```
NEXT_PUBLIC_REPORT_BASE_URL=http://localhost:8080
```

→ Xem thêm: [test.nhi.sg repo](https://github.com/NLH-NEDU-LABS/nedu-test)
