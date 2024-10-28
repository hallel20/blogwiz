"use server"

import prisma from "@/prisma/db"
import { PostStatus, Role } from "@prisma/client"
import { revalidatePath } from "next/cache"
import bcrypt from "bcrypt";
import { CategoryForm } from "@/app/(admin)/admin/categories/NewCategory";
import { getServerSession } from "next-auth";
import { PostFormType, SignUpForm } from "./formTypes";


export const createUser = async (data: SignUpForm) => {
    const {username, password, confirmPassword, firstname, email, lastname, role} = data

  try {
    if (password != confirmPassword)
      throw new Error("Password not match!");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await prisma.user.create({
      data: { username, firstname, email, lastname, password: hashedPassword, role },
    });
  } catch (ex) {
    console.log(ex);
    throw new Error("Could not create user!");
  }
};

export const signUp = async (data: SignUpForm) => {
    const { username, firstname, lastname, email, password, confirmPassword } =
    data;
    
    try {
        if (password != confirmPassword) throw new Error("Password not match!");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        username,
        firstname,
        lastname,
        email,
        password: hashedPassword,
    },
});
} catch (err) {
    console.log(err);
    throw new Error("Something went wrong, please try again!");
}
};

export const createCategory = async(data: CategoryForm) => {
  const {name, description, slug, image} = data
    console.log(description)
    try {
    await prisma.category.create({data: {
        name, slug, description, image
     }})
     revalidatePath("admin/categories")
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to create Category")
    }
} 

export const updateCategory = async(formData: FormData) => {
    const id = parseInt(formData.get('id') as string)
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const slug = formData.get("slug") as string
    const image = formData.get("image") as string
    console.log(description)
    try {
    const category = await prisma.category.findUnique({where: {id}})
    if (!category) {
        throw new Error("Category does not exist!")
    }
    await prisma.category.update({where: {id}, data: {id, name, slug, description, image}})
    revalidatePath("admin/categories")
  }
  catch (ex) {
    console.log(ex)
    throw new Error("Failed to update Category")
    }
  } 

export const deleteCategory = async (id: number) => {
  try {
    await prisma.category.delete({where: {id}})
    revalidatePath("admin/categories")
  } catch(ex) {
    console.log(ex)
  }
}


export const createPost = async(data: PostFormType) => {
  const {title, slug, status, content, tags, image, categoryId} = data
  const session = await getServerSession()
  try {
    if(!session?.user?.email) throw new Error("Not Authenticated!")

    const email = session.user.email

    if(!slug) throw new Error("Slug is required!")

    const user = await prisma.user.findUnique({where: {email}})

    if(!user) throw new Error("Bad Request!")
    await prisma.post.create({data: {
      title, content, userId: user!.id, slug, tags, categoryId: parseInt(categoryId), status, images: {create: [{url: image}]}
     }})
     revalidatePath("admin/posts")
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to create Post")
    }
} 

export const updatePost = async(data: PostFormType, id: number) => {
  const {title, status, content, tags, image, categoryId} = data
  const session = await getServerSession()
  try {
    if(!session?.user?.email) throw new Error("Not Authenticated!")

    const email = session.user.email

    const user = await prisma.user.findUnique({where: {email}})

    if(!user) throw new Error("Bad Request!")

    if(user.role != "admin") throw new Error("Not Authorized!")
    await prisma.post.update({where: {id}, data: {
      title, content, userId: user!.id, tags, categoryId: parseInt(categoryId), status, images: {create: [{url: image}]}
     }})
     revalidatePath("admin/posts")
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to create Post")
    }
} 

export const deletePost = async(id: number) => {
  try {
    await prisma.post.delete({where: {id}})
    revalidatePath("admin/posts")
  } catch (ex) {
    console.log(ex)
    throw new Error("Failed to delete post!")
  }
} 
