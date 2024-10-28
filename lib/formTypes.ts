import { PostStatus, Role } from "@prisma/client";

export interface PostFormType {
    title: string;
    content: string;
    categoryId: string;
    tags: string;
    image: string;
    status: PostStatus;
    slug?: string
  }

  
export interface LoginFormType { 
    email: string;
    password: string;
}


export interface SignUpForm {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role?: Role
  }

  