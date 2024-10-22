"use server"

import prisma from "@/prisma/db"

export const createCategory = async(formData: FormData) => {
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const slug = formData.get("slug") as string
    const image = formData.get("image") as string
    try {
    await prisma.category.create({data: {
        name, description, image, slug
    }})
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to create Category")
    }
} 

