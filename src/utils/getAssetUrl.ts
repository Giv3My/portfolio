export const getAssetUrl = (folder: string) => (name: string) => {
  return new URL(`../assets/${folder}/${name}`, import.meta.url).href;
};
