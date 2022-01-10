class Youtube {
  constructor(key) {
    // console.log(key, "<<<<<<<<<key");
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
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
