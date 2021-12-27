class imgUpload {
  ///사용자에게 파일을 인자로 받아서 업로드진행
  ///업로드 후 서버에 있는 이미지의 url을 전달(누구한테?)
  ////서버에 업로드하고 왈료되면 결과값이 return된다!
  ///이미지
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pdzaoz52");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/drqni4rhj/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default imgUpload;
