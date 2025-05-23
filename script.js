import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  const input = document.getElementById("zInput");
  const button = document.getElementById("applyBtn");

  button.addEventListener("click", async () => {
    const items = await OBR.scene.items.getSelection();
    const zIndex = parseInt(input.value);

    if (!Number.isInteger(zIndex) || zIndex < -10 || zIndex > 10) {
      alert("Введите значение от -10 до 10");
      return;
    }

    const updates = items
      .filter(item => item.type === "image" && item.layer === "CHARACTER")
      .map(item => ({ id: item.id, zIndex }));

    await OBR.scene.items.updateItems(updates);
  });
});
