export default function Footer() {
    return (
        <div className="mt-30">
            <div className="flex flex-col items-start justify-center mt-10">   
                <p className="text-[5rem] font-bold">
                    Let's Work Together! <br />
                </p>
                <p className="text-[2.5rem] underline font-light text-muted-foreground">
                    hi@jatinkaushik.com
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-10">
                <div className="text-sm md:text-lg font-light text-muted-foreground">
                    © 2025 Jatin Kaushik. All rights reserved.
                </div>
                <div className="text-sm md:text-lg font-light text-muted-foreground ">
                    Built with ❤️ using Next.js, TailwindsCSS
                </div>
            </div>
        </div>
    )
}