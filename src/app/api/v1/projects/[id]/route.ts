import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../Utils/mongoose';
import { Project } from '../../../../../models/Project';
import { ProjectImage } from '../../../../../models/ProjectImage';

export async function GET(request: Request, context: any) {
  try {
    await connectToDatabase();
    
    // Support Next.js 15+ where params is a promise
    const params = await Promise.resolve(context.params);
    const { id } = params;

    const project = await Project.findById(id).lean();

    if (project) {
      project.hashTags = project.hashTags ? (project.hashTags as string).split(',') : [];
      project.seoKeywords = project.seoKeywords ? (project.seoKeywords as string).split(',') : [];
    }

    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: any) {
  try {
    await connectToDatabase();
    
    const params = await Promise.resolve(context.params);
    const { id } = params;

    await Project.updateOne({ _id: id }, { isActive: 0 });

    return NextResponse.json({ message: 'PROJECT DELETED' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
