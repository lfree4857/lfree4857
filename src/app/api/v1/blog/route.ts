import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../Utils/mongoose';
import { Blog } from '../../../../models/Blog';
import { BlogImage } from '../../../../models/BlogImage';

export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;

    const data = await Blog.find({ isActive: 1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: -1 });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const hashTags = body.hashTags?.replace(/[\[\]"]/g, '');
    const seoKeywords = body.seoKeywords?.replace(/[\[\]"]/g, '');

    // UPDATE
    if (body.id) {
      await Blog.updateOne(
        { _id: body.id },
        {
          title: body.title,
          shortDesc: body.shortDesc,
          longDesc: body.longDesc,
          hashTags,
          seoKeywords,
          blogCategory: body.blogCategory,
          timeToRead: body.timeToRead,
        }
      );

      if (body.isVideo) {
        if (body.media && Array.isArray(body.media)) {
          for (const media of body.media) {
            await BlogImage.create({
              blog_id: body.id,
              media,
            });
          }
        }

        await Blog.updateOne({ _id: body.id }, { isVideo: 1 });
      }

      return NextResponse.json({ message: 'BLOG UPDATED' });
    }

    // CREATE
    const blog = await Blog.create({
      title: body.title,
      shortDesc: body.shortDesc,
      longDesc: body.longDesc,
      hashTags,
      seoKeywords,
      blogCategory: body.blogCategory,
      timeToRead: body.timeToRead,
      createdBy: body.userId,
    });

    if (body.isVideo) {
      if (body.media && Array.isArray(body.media)) {
        for (const media of body.media) {
          await BlogImage.create({
            blog_id: blog._id,
            media,
          });
        }
      }

      await Blog.updateOne({ _id: blog._id }, { isVideo: 1 });
    }

    return NextResponse.json({ message: 'BLOG ADDED' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
