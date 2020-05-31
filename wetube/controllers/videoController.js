import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try{
    const videos = await Video.find({});
    throw Error("error");
    res.render("home", { pageTitle: "Home", videos});
  } catch(error){
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: []});
  }
};

export const earch = (req, res) => {
  // ES6 이전의 코딩방식 
  //const searchingBy = req.query.term;
  
  const {
    query: { term : searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const videos = (req, res) => res.send("Videos"); 

export const getUpload = (req, res) => 
  res.render("upload", { pageTitle: "Upload" });

// /upload의 요청에 응답 
export const postUpload = async(req, res) => {
    const {
      body: { file, title, description },
      file : { path }
    } = req;
    const newVideo = await Video.create({
      fileUrl : path,
      title,
      description
    });
    console.dir(file, title, description);
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async(req, res) => {
  const {
    params: {id}
  } = req;

  try{
    const video = await Video.findById(id);
    console.log(video);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
    // video: video 는 video와 같음 
  }catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });