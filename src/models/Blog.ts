import mongoose, { Schema } from 'mongoose';

export const BlogSchema = new Schema(
  {
    title: String,
    shortDesc: String,
    longDesc: String,

    hashTags: String,
    seoKeywords: String,

    blogCategory: String,

    timeToRead: String,

    createdBy: String,

    isVideo: { type: Number, default: 0 },

    isActive: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const Blog: any = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
