export const iframeDeSpotify = (trackId) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`
  );
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute(
    "allow",
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  );
  iframe.setAttribute("loading", "lazy");
  return iframe;
};

export const iframeDeSpotifyEnInnerHTML = (trackId) => {
  return `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
};
