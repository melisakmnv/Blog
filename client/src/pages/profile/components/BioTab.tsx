import { Separator } from "@/components/ui/separator"


export const BioTab = () => {
    return (
        <div className="flex flex-col gap-8">
            <p className="font-Karla font-extralight text-xl leading-[40px]">
                Hey, I’m a web developer with a soft spot for clean design, smooth interactions, and the little details that make a big difference. I craft websites that don’t just work — they feel good to use. When I’m not tweaking pixels or chasing performance, I’m probably sketching ideas, writing for clarity, or getting lost in a good interface. This space is where I share thoughts, experiments, and digital daydreams.
            </p>
            <Separator className="bg-accent" />
            <p className="text-sm text-neutral-600 hover:underline cursor-pointer">8.2K Followers · 8 Following</p>
        </div>
    )
}
