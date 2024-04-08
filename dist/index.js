// src/cn/index.ts
function cn(classes) {
  return Object.entries(classes).filter(([, value]) => value).map(([key]) => key).join(" ");
}

// src/sha256/index.ts
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
export {
  cn,
  sha256
};
//# sourceMappingURL=index.js.map
