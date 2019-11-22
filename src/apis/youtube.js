import axios from "axios";
const KEY = "AIzaSyA-bo7DasEj3PXznI5fgSD97tX6evZzYog";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
