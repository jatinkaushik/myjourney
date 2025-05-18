export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-around mt-10">
            <div className="text-sm md:text-lg font-light text-muted-foreground">
                © 2025 Jatin Kaushik. All rights reserved.
            </div>
            <div className="text-sm md:text-lg font-light text-muted-foreground ">
                Built with ❤️ using Next.js, TailwindsCSS
            </div>
        </div>
    )
}