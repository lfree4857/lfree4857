import mongoose, { Schema } from 'mongoose';

export const ProjectSchema = new Schema(
  {
    title: String,
    shortDesc: String,
    longDesc: String,
    slug: String,
    date: String,
    
    hashTags: String,
    seoKeywords: String,

    projectCategory: String,

    userId: {
      username: String,
    },
    
    isVideo: { type: Number, default: 0 },
    isActive: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const Project: any = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
