import { Schema, model, models } from "mongoose";

const aboutMeSchema = new Schema(
  {
    // Who I am section
    heading1: { type: String, required: true },
    description1: { type: String, required: true },
    // What I do section
    heading2: { type: String, required: true },
    description2: { type: String, required: true },
  },
  { timestamps: true },
);

const AboutSection =
  models.AboutSection || model("AboutSection", aboutMeSchema);

export default AboutSection;
