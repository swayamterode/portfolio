import { Schema, model, models } from "mongoose";

const hero_sectionSchema = new Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
});

const HeroSection =
  models.HeroSection || model("HeroSection", hero_sectionSchema);

export default HeroSection;
