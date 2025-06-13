  import { API_URL } from "astro:env/server";

interface AnimeConfig {
  wajiknime: {
    siteName: string;
    description: string;
    logo: string;
    favicon: string;
    image: string;
  };

  wajikAnimeApi: {
    apiUrl: string;
    baseUrlPath: string;
  };
}

const animeConfig: AnimeConfig = {
  wajiknime: {
    siteName: "NogiNime",
    description: "Nonton anime gratis ga pake karcis hanya di NogiNime",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/wajiknime.jpg",
  },

  wajikAnimeApi: {
    apiUrl: API_URL,
    baseUrlPath: "/otakudesu",
  },
};

export default animeConfig;
