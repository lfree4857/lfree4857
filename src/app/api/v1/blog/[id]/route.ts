import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../Utils/mongoose';
import { Blog } from '../../../../../models/Blog';

export async function GET(request: Request, context: any) {
  try {
    await connectToDatabase();
    // Next 15+ compatibility params extraction
    const params = await Promise.resolve(context.params);
    const { id } = params;

    const blog = await Blog.findById(id).lean();

    if (blog) {
      blog.hashTags = blog.hashTags ? (blog.hashTags as string).split(',') : [];
      blog.seoKeywords = blog.seoKeywords ? (blog.seoKeywords as string).split(',') : [];
    }

    return NextResponse.json(blog);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: any) {
  try {
    await connectToDatabase();
    const params = await Promise.resolve(context.params);
    const { id } = params;

    await Blog.updateOne({ _id: id }, { isActive: 0 });

    return NextResponse.json({ message: 'BLOG DELETED' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
