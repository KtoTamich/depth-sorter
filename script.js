import { useTokenStore } from "@owlbear-rodeo/sdk";

const tokenStore = useTokenStore();

tokenStore.onChange((tokens) => {
  const sorted = [...tokens].sort((a, b) => a.y - b.y);
  sorted.forEach((token, index) => {
    tokenStore.update(token.id, {
      zIndex: sorted.length - index
    });
  });
});