import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../../Utils/mongoose';
import { BlogImage } from '../../../../../../models/BlogImage';

export async function DELETE(request: Request, context: any) {
  try {
    await connectToDatabase();
    
    // Support Next.js 15+ where params is a promise
    const params = await Promise.resolve(context.params);
    const { id } = params;

    await BlogImage.updateOne({ _id: id }, { isActive: 0 });

    return NextResponse.json({ message: 'IMAGE DELETED' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
