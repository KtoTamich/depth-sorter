import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  const input = document.getElementById("zInput");
  const button = document.getElementById("applyBtn");

  button.addEventListener("click", async () => {
    const z = parseInt(input.value);
    if (z < -10 || z > 10) {
      alert("Значение должно быть от -10 до 10");
      return;
    }

    const selection = await OBR.scene.items.getSelection();

    const updates = selection
      .filter((item) => item.type === "image" && item.layer === "CHARACTER")
      .map((item) => ({
        id: item.id,
        zIndex: z
      }));

    if (updates.length === 0) {
      alert("Выберите токен из секции 'Character'");
      return;
    }

    await OBR.scene.items.updateItems(updates);
  });
});
