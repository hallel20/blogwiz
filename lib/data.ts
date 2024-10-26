"use server"

import prisma from "@/prisma/db"

export const getCategories = async() => {
    try {
    const categories = await prisma.category.findMany({include: {_count: true}})
    return categories
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to fetch categories")
    }
} 

export const getCategory = async(id: string) => {
    try {
    const category = await prisma.category.findUnique({where: {id: parseInt(id)}})
    if (!category) throw new Error("Category not found")
    return category
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to fetch category")
    }
} 


export const getPosts = async() => {
    try {
    const posts = await prisma.post.findMany({include: {_count: true}})
    return posts
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to fetch posts")
    }
} 


export const getPost = async(slug: string) => {
    try {
    const posts = await prisma.post.findUnique({where: {slug}, include: {comments: {include: {user: {include: {images: true}}}}, images: true, user: true}})
    return posts
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to fetch posts")
    }
} 
