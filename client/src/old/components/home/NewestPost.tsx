

export const NewestPost = () => {

    const postTitle = "10 Hidden Gems on Netflix You Haven't Watched Yet 🍿";
    const postDescription = "Tired of watching the same trending titles? We've rounded up a list of underrated Netflix movies that flew under the radar. From emotional indie dramas and gripping international thrillers to heartwarming comedies, these hidden gems offer fresh stories, unique perspectives, and unforgettable performances that deserve your attention. Perfect for your next movie night!";

    const postCoverSrc = "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQRhtYPPyP0FOw222byblM_Y7tSQ_Iw6DHKo5ifhs0U2LtmDiU6r12_Rdm251SPx0pJu-WByAiuuOU5kWUqmubwwYpDxOI14YDJl-0YN8BjVacIfC6nJ1K80wuyXyNKjmY2JIIXqQtxRtvCuPEkKEK3j8O_4.jpg?r=d83"
    const postPublisher = "Netflix";
    const publisherAvatar = "https://www.citypng.com/public/uploads/preview/round-netflix-logo-701751694792607bemlfazrrl.png";
    const publishTime = "12";
    const postCategory = "Movies";
    const readingTime = "4 min";



    // line-clamp-3 //
    return (
        <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="flex-1 rounded-md overflow-hidden">
                <img className="object-cover w-full h-full" src={postCoverSrc} alt="Post Cover" />
            </div>
            <div className="flex-1 flex flex-col gap-5 py-4">
                <div className="flex items-center gap-2">
                    <img className="size-10" src={publisherAvatar} alt="Publisher Avatar" />
                    <p className="text-neutral-600">{postPublisher} • <span>{publishTime} minutes ago</span></p>
                </div>
                <h1 className="text-2xl lg:text-5xl font-bold leading-tight text-neutral-800">{postTitle}</h1>
                <p className="line-clamp-3 text-neutral-700">{postDescription}</p>

                <div className="text-neutral-600">
                    <p><span className="text-[#bba07f]">{postCategory}</span> {" "} • {" "} {readingTime} read</p>
                </div>
            </div>
        </div>
    )
}
