"use server"

import prisma from "@/prisma/db"

export const getCategories = async() => {
    try {
    const categories = await prisma.category.findMany()
    return categories
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to fetch categories")
    }
} 

