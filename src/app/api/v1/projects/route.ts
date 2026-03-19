import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../Utils/mongoose';
import { Project } from '../../../../models/Project';
import { ProjectImage } from '../../../../models/ProjectImage';

export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;

    const data = await Project.find({ isActive: 1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: -1 })
      .lean();

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
      await Project.updateOne(
        { _id: body.id },
        {
          title: body.title,
          shortDesc: body.shortDesc,
          longDesc: body.longDesc,
          slug: body.slug,
          date: body.date,
          hashTags,
          seoKeywords,
          projectCategory: body.projectCategory,
          userName: body.username,
        }
      );

      if (body.isVideo) {
        if (body.media && Array.isArray(body.media)) {
          for (const media of body.media) {
            await ProjectImage.create({
              project_id: body.id,
              media,
            });
          }
        }
        await Project.updateOne({ _id: body.id }, { isVideo: 1 });
      }

      return NextResponse.json({ message: 'PROJECT UPDATED' });
    }

    // CREATE
    const project = await Project.create({
      title: body.title,
      shortDesc: body.shortDesc,
      longDesc: body.longDesc,
      slug: body.slug,
      date: body.date,
      hashTags,
      seoKeywords,
      projectCategory: body.projectCategory,
      userId: {
        username: body.username || body.userId?.username || 'Admin'
      },
    });

    if (body.isVideo) {
      if (body.media && Array.isArray(body.media)) {
        for (const media of body.media) {
          await ProjectImage.create({
            project_id: project._id,
            media,
          });
        }
      }
      await Project.updateOne({ _id: project._id }, { isVideo: 1 });
    }

    return NextResponse.json({ message: 'PROJECT ADDED' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
