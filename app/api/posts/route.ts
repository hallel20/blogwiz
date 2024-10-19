import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createPostSchema = z.object({
    title: z.string().min(1).max(255),
    content: z.string().min(1)
})

// export async function GET(request: NextRequest) {
//     const posts = prisma.post.findMany()
//     return NextResponse.json(posts)
// }

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createPostSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    const newPost = await prisma.post.create({
        data: {title: body.title, content: body.content}
    })

    return NextResponse.json(newPost, {status: 201})
}