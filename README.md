# turtle-error-app

Tiny Node.js/Express app.

## Endpoints

- `GET /makeerror` — Returns `500` with message `thisTurtleNeedsALittleLonger` during the first 20 minutes of every hour; returns `200` otherwise.
- `GET /fixerror` — Always returns `200`.
- `GET /` — Full-screen image UI. Shows `broken.png` when in the error window, `working.png` otherwise.
- `GET /status` — JSON `{ "broken": boolean }` used by the UI.

## Setup

```bash
npm install
npm start
```

Then open http://localhost:3000.

## Images

Drop two images into `public/`:

- `public/working.png` — shown when the site is "working" (200)
- `public/broken.png` — shown when the site is throwing 500s
