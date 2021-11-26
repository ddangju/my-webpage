class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  mostPopular() {
    return fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA",
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA&key=AIzaSyCtO1ZI8FSJl8PLT4d9vxh55y9-tjhdTeA`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}
export default Youtube;
