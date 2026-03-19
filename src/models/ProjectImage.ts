import mongoose, { Schema } from 'mongoose';

export const ProjectImageSchema = new Schema({
  project_id: String,
  media: String,
  isActive: { type: Number, default: 1 },
});

export const ProjectImage: any = mongoose.models.ProjectImage || mongoose.model('ProjectImage', ProjectImageSchema);
