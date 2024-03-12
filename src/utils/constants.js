export const PROXY_CORS = "https://corsproxy.org/?";

export const generateProxyUrl = (URL) => PROXY_CORS + encodeURIComponent(URL);

export const GOOGLE_API_KEY = "AIzaSyDqqsjnChvzWEQi_NqU0cc4C8ik-YG_raI";

export const SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const generateNextPageVideoApi = (nextPageToken) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=${nextPageToken}&regionCode=IN&key=${GOOGLE_API_KEY}`;
};

export const generateVideoUrl = (id) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${GOOGLE_API_KEY}`;
};

export const generateSearchVideoUrl = (query, nextPageToken) => {
  if (nextPageToken) {
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${query}&pageToken=${nextPageToken}&key=${GOOGLE_API_KEY}`;
  }
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=${query}&key=${GOOGLE_API_KEY}`;
};

export const itemsList = [
  "All",
  "Gaming",
  "Music",
  "Movies",
  "Chess",
  "Stocks",
  "Esports",
  "News",
  "Live",
  "Programming",
  "Leetcode",
  "Indian Cricket Team",
  "Podcasts",
  "Combat Sports",
];
