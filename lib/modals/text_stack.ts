import { Schema, model, models } from "mongoose";

const techStack_Schema = new Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  className: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
});

const TechStack = models.TechStack || model("TechStack", techStack_Schema);

module.exports = TechStack;
