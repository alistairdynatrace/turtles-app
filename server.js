const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (images, index.html) from /public
app.use(express.static(path.join(__dirname, 'public')));

// Helper: are we in the first 20 minutes of the hour?
function isErrorWindow() {
  return new Date().getMinutes() < 20;
}

// Endpoint that errors during the first 20 minutes of every hour
app.get('/makeerror', (req, res, next) => {
  if (isErrorWindow()) {
    const err = new Error('thisTurtleNeedsALittleLonger');
    err.status = 500;
    return next(err);
  }
  res.status(200).json({ status: 'ok' });
});

// Endpoint that always returns 200
app.get('/fixerror', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Status endpoint used by the UI to pick which image to display
app.get('/status', (req, res) => {
  res.json({ broken: isErrorWindow() });
});

// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
