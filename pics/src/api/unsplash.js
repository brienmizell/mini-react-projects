import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 78ad77397a8f30eb27f4a92621de18765262e691d2451ad12fbe80ffdb7ac74c"
  }
});
