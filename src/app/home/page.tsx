import Image from "next/image";
import hero from "../../../public/hero.jpg";
import Categories from "@/components/categories";
import Contacts from "../contact/page";
import Blogs from '../blogs/page';

export default function Home(){
    return(
      <div>
        <div className="container max-w-[1880px] relative h-[400px] sm:h-[800px]">
        <div className="absolute inset-0 shadow-lg shadow-red-300">
          <Image
            src={hero}
            alt="Hero Background"
            layout="fill"
            objectFit="cover" 
            objectPosition="center"
            quality={100} 
          />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-[8px] sm:gap-x-6 sm:h-[600px] h-[360px] text-white">
          <h1 className="text-4xl font-bold sm:text-6xl">Let's Blog</h1>
          <div className="w-[180px] h-[1px] bg-white sm:w-[2px] sm:h-[160px] sm:block hidden"></div>
          <div className="sm:bg-white sm:bg-opacity-30 sm:backdrop-blur-sm w-[220px] bg-transparent h-[50px] sm:w-[400px] sm:h-[80px] flex items-center rounded">
          <p className="text-sm sm:text-lg sm:text-black text-white sm:ml-4 block"> We are a Blog Website where you just read and we manage the rest.</p>
          </div>
        </div>
      </div>
      <Blogs/>
      <Categories />
      <Contacts />
      </div>
    )
}