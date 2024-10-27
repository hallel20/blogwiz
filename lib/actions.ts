"use server"

import prisma from "@/prisma/db"
import { PostStatus, Role } from "@prisma/client"
import { revalidatePath } from "next/cache"
import bcrypt from "bcrypt";
import { redirect } from 'next/navigation';
import { SignInResponse, getSession, signIn } from 'next-auth/react';
import { CategoryForm } from "@/app/(admin)/admin/categories/NewCategory";

export const handleSignIn = async (data: Login) => {
    const {email, password} = data
      if (!email || !password) {
        throw new Error('Please provide both email and password.');
      }
      
      // Fetch user from database
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password.');
  }

  const result = await signIn('credentials', {
    email,
    password,
    redirect: false,
  }) as SignInResponse;

  if (result?.error) {
    throw new Error(result.error);
  }
  
  // Redirect on successful login
  redirect('/');
}

interface newUser {
    username: string;
    password: string;
    confirm_password: string;
    firstname: string;
    email: string;
    lastname: string;
    role: Role
}

export const createUser = async (data: newUser) => {
    const {username, password, confirm_password, firstname, email, lastname, role} = data

  try {
    if (password != confirm_password)
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

export const signUp = async (data: newUser) => {
    const { username, firstname, lastname, email, password, confirm_password } =
    data;
    
    try {
        if (password != confirm_password) throw new Error("Password not match!");
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

export interface Login { 
    email: string;
    password: string;
}

// export const authenticate = async (data: Login) => {
//   const { email, password } = data;

//   try {
//     await signIn("credentials", { redirect: false, email, password });
//   } catch (ex: any) {
//     if (ex.message.includes("CredentialsSignin")) {
//       return "Wrong Credentials";
//     }
//     throw ex;
//   }
// };



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


export interface PostFormType {
    title: string;
    content: string;
    categoryId: number;
    tags: string;
    image: string;
    status: PostStatus;
    slug: string
  }

export const createPost = async(data: PostFormType) => {
    const user = getSession()
    const {title, slug, status, content, tags, image, categoryId} = data
    try {
    await prisma.post.create({data: {
      title, content, userId: user.id, slug, tags, categoryId, status, images: {create: [{url: image}]}
     }})
     revalidatePath("admin/posts")
    }
    catch (ex) {
        console.log(ex)
        throw new Error("Failed to create Post")
    }
} 

