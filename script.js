import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  OBR.scene.items.onChange(async (items) => {
    const tokens = items.filter(item => item.type === "image" && item.layer === "CHARACTER");

    const sortedTokens = tokens.sort((a, b) => a.position.y - b.position.y);

    const updates = sortedTokens.map((token, index) => ({
      id: token.id,
      zIndex: sortedTokens.length - index
    }));

    await OBR.scene.items.updateItems(updates);
  });
});
