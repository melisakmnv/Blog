import express from 'express';
import PostModel from '../models/post.model.ts';



export const getPosts = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const posts = await PostModel.find()
        res.status(200).json(posts)
    } catch (error) {
        next(error);
    }
};


export const getPost = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {
        const post = await PostModel.findOne({
            slug: req.params.slug
        })
        res.status(200).json(post)
    } catch (error) {
        next(error);
    }
}


export const createPost = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        const newPost = new PostModel(req.body)
        const post = await newPost.save()
        res.status(201).json(post)

    } catch (error) {
        next(error)
    }
}


export const deletePost = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {

        await PostModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted")

    } catch (error) {
        next(error)
    }
}