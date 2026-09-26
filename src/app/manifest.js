import profile from "@/config/profile";

export default function manifest() {
  return {
    name:             `${profile.name} — ${profile.role}`,
    short_name:       profile.name,
    description:      profile.shortBio,
    start_url:        "/",
    display:          "standalone",
    background_color: "#080808",
    theme_color:      "#ff6b1a",
    lang:             "en",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
