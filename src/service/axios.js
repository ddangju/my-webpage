import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: key },
    });
    // this.key = key;
    // this.requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };
  }
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        chart: "mostPopular",
        part: "snippet",
        maxResults: "20",
      },
    });

    return response.data.items;
    // const response = await fetch(
    //   `/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${this.key}`,
    //   this.requestOptions
    // );
    // const result_1 = await response.json();
    // return result_1.items;
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;
