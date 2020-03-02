// 여기서 내 video들의 형태를 정의
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl : {
    type: String,
    required: "File URL is required" 
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

const model = mongoose.model("Video", VideoSchema);

export default model;