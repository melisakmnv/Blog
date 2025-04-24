

export const Header = () => {
    return (
        <div className="mt-10 flex flex-col justify-center items-center gap-2 md:gap-4 bg-primary/10 py-3 md:py-6 px-4 rounded-md">
            <div className="">
                <h3 className="font-Poppins ">Welcome to {" "} <span className="font-DancingScript text-2xl text-[#bba07f]">Story •</span> </h3>
            </div>
            <div className="md:w-1/2 ">
                <h2 className="text-sm md:text-lg font-Karla font-mono text-center">Our little corner of the internet 🌐, where stories come alive 📖, ideas flow 💡, and inspiration awaits ✨. Grab a cup of coffee ☕ and dive in—your next favorite read is just a scroll away 📜.</h2>
            </div>
        </div>
    )
}
