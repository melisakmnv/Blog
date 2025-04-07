
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

import { BsArrowRight } from "react-icons/bs";


export const BlogCard = () => {

    const postTitle = "10 Hidden Gems on Netflix You Haven't Watched Yet 🍿";
    const postDescription = "Tired of watching the same trending titles? We've rounded up a list of underrated Netflix movies that flew under the radar. From emotional indie dramas and gripping international thrillers to heartwarming comedies, these hidden gems offer fresh stories, unique perspectives, and unforgettable performances that deserve your attention. Perfect for your next movie night!";

    const postCoverSrc = "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQRhtYPPyP0FOw222byblM_Y7tSQ_Iw6DHKo5ifhs0U2LtmDiU6r12_Rdm251SPx0pJu-WByAiuuOU5kWUqmubwwYpDxOI14YDJl-0YN8BjVacIfC6nJ1K80wuyXyNKjmY2JIIXqQtxRtvCuPEkKEK3j8O_4.jpg?r=d83"
    const postPublisher = "John Doe";
    const publisherAvatar = "https://www.citypng.com/public/uploads/preview/round-netflix-logo-701751694792607bemlfazrrl.png";
    const publishTime = "12 Jan 2025";
    const postCategory = "Movies";
    const readingTime = "4 min";


    return (

        <Card className="w-[350px] lg:w-[400px] border rounded-sm">
            <CardHeader>
                <img src={postCoverSrc} alt="Post Cover" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <CardTitle className="text-xl font-Montserrat font-bold leading-tight text-neutral-800">{postTitle}</CardTitle>
                <CardDescription className="line-clamp-3 font-Karla text-neutral-700 text-sm">{postDescription}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img className="size-10" src={publisherAvatar} alt="Publisher Avatar" />
                    <p className="text-sm text-neutral-500 font-Poppins"><span>{postPublisher}</span> {" "} • {" "} {publishTime}</p>
                </div>
                <Button>
                    <BsArrowRight />
                </Button>
            </CardFooter>
        </Card>
    )
}
