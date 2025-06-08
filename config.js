// Tự động detect URL hiện tại
function getCurrentURL() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Fallback URLs cho các trường hợp phổ biến
  return "http://127.0.0.1:5500";
}

// Spotify API Configuration
const SPOTIFY_CONFIG = {
  CLIENT_ID: "1e62e15904e54e36a23391f829477ea6",
  CLIENT_SECRET: "45e0f449819247e18fc2b1ead1b53c8a",
  get REDIRECT_URI() {
    return getCurrentURL();
  },

};

console.log(`
🎵 SPORTIFY WEB PLAYER
📝 Cấu hình:
- Client ID: ${SPOTIFY_CONFIG.CLIENT_ID ? "✅" : "❌"}
- Client Secret: ${SPOTIFY_CONFIG.CLIENT_SECRET ? "✅" : "❌"}
- Redirect URI: ${SPOTIFY_CONFIG.REDIRECT_URI}
`);