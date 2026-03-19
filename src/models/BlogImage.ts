import mongoose, { Schema } from 'mongoose';

export const BlogImageSchema = new Schema({
  blog_id: String,
  media: String,
  isActive: { type: Number, default: 1 },
});

export const BlogImage: any = mongoose.models.BlogImage || mongoose.model('BlogImage', BlogImageSchema);
