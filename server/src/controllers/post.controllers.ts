import express from 'express';
import PostModel from '../models/post.model';



export const getPosts = async (req: express.Request, res: express.Response) => {

    const posts = await PostModel.find()
    res.status(200).json(posts)
};


export const getPost = async (req: express.Request, res: express.Response) => {

    const post = await PostModel.findOne({
        slug: req.params.slug
    })
    res.status(200).json(post)
}


export const createPost = async (req: express.Request, res: express.Response) => {

    const newPost = new PostModel(req.body)
    const post = await newPost.save()
    res.status(201).json(post)

}


export const deletePost = async (req: express.Request, res: express.Response) => {

    await PostModel.findByIdAndDelete(req.params.id)
    res.status(200).json("Post has been deleted")

}