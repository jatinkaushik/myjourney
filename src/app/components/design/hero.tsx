export default function Hero() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-span-4 pb-8 px-8 order-1 sm:order-2">
        <div className="relative w-full h-full">
            <div className="absolute rounded-4xl w-full h-full -top-3 right-3 bg-gradient-to-t from-dp-from-background to-dp-to-background">
            </div>
            <div className="relative w-auto h-auto">
                <img
                src="/assets/images/MyPicFinal.jpg"
                alt="Hero Image"
                className="rounded-4xl shadow-lg"
                />
            </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 pr-8 font-medium order-2 sm:order-1 text-[1.2rem] lg:text-[2.5rem]">
        <p className="text-[0.8rem] lg:text-[1.8rem]">Hi! 👋</p> 
        <p className="text-muted-foreground">
            <b className="text-primary-foreground">I am Jatin Kaushik, </b>
            a Software Developer with over 5 years of experience.
        </p>
        <br />
        <div className="col-span-12 font-light order-3 text-muted-foreground text-[0.8rem] lg:text-[1.2rem]">
            Currently working for <span className="text-primary-foreground">Citco</span> Company. <br />   
            Invite me for Job interview -{'>'} <span className="text-primary-foreground underline">hi@jatinkaushik.com</span>
        </div>
      </div>
    </div>
  );
}