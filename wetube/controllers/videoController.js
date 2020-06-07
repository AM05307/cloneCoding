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
    res.render("videoDetail", { pageTitle: video.title, video });
    // video: video 는 video와 같음 
  }catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditVideo = (req, res) => {
  const {
    params: {id}
  } = req;
  try{
    const video = await Video.findById(id);
    res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
  }catch(error){
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: {id},
    body: {title, description}
  } = req;
  try{
    await Video.findOneAndUpdate({_id: id}, {title, description});
    res.redirect(routes.videoDetail(id));
  }catch(error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async(req, res) => {
  const {
    params: {id}
  } = req;
  try{
    // 해당하는 비디오를 찾아서 지움 
    await Video.findOneAndRemove({_id : id});
  }catch(error){}
  res.redirect(routes.home);
}