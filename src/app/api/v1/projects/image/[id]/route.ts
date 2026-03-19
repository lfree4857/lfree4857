import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../../Utils/mongoose';
import { ProjectImage } from '../../../../../../models/ProjectImage';

export async function DELETE(request: Request, context: any) {
  try {
    await connectToDatabase();
    
    const params = await Promise.resolve(context.params);
    const { id } = params;

    await ProjectImage.updateOne({ _id: id }, { isActive: 0 });

    return NextResponse.json({ message: 'IMAGE DELETED' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
