export interface IUser {
    _id: string;
    username: string;
    email: string;
    password : string;
    avatar : string;
    bio : string;
    followers : number;
    followings : number;
}