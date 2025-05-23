import { getApi } from "https://unpkg.com/owlbear-api";

const api = await getApi();
console.log("Depth Sorter запущен");

function computeZ(y) {
  return Math.floor(y);
}

api.scene.onTokenChange(({ tokens }) => {
  const updates = tokens.map(token => {
    const newZ = computeZ(token.position.y);

    if (token.zIndex !== newZ) {
      return {
        id: token.id,
        zIndex: newZ
      };
    }

    return null;
  }).filter(Boolean);

  if (updates.length > 0) {
    api.scene.updateTokens(updates);
  }
});