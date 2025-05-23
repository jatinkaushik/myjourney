export default function Footer() {
    return (
        <div className="mt-30">
            <div className="flex flex-col items-center justify-center mt-10">   
                <p className="text-[1.5rem] text-center md:text-[3rem] font-bold">
                    Looking for a talented full-stack developer to join your remote team? Let&apos;s connect! <br />
                </p>
                <p className="text-[2rem] md:text-[2.5rem] underline font-light text-muted-foreground">
                    <a href="mailto:hi@jatinkaushik.com">hi@jatinkaushik.com</a>
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