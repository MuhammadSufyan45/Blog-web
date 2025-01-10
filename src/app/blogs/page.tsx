import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 10; // seconds

export default async function Blogs() {

    interface Post {
        title : string,
        date : string,
        category : string,
        slug : {current:string},
        image : any,
        writer : { name: string };
    }

    const query = `*[_type=='blog'] | order(_createdAt asc){
  category,image,date,slug,title,
    writer->{name}
}`;

const Data:Post[] = await client.fetch(query);
console.log(Data);


    return (
        <div className="container max-w-[1880px] p-2 sm:p-6 space-y-4">
            <h2 className="text-[#1b1b1b] text-4xl sm:text-6xl font-bold text-center font-serif">Blogs</h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
                {
                    Data.map((post:Post) => {
                        return (
                            <div className="bg-white shadow-md p-4 flex flex-col sm:flex-row sm:gap-x-4 gap-y-2 rounded-lg">
                                <Image
                                    src={urlFor(post.image).url()}
                                    alt="fitness"
                                    height={200}
                                    width={400}
                                    className="rounded"
                                />
                                <div className="space-y-2 sm:space-y-4 sm:mt-6">
                                    <p className="bg-blue-500 bg-opacity-10 text-blue-700 text-sm px-2 py-[6px] w-fit rounded-xl">{post.category}</p>
                                    <div>
                                        <Link key={post.slug.current} href={`/blogs/${post.slug.current}`}>
                                            <h2 className="text-[#1b1b1b] text-xl font-sans sm:text-4xl">{post.title}</h2>
                                        </Link>
                                        <p className="text-gray-500 text-xs sm:mt-2">{post.writer.name} | {post.date}</p>
                                    </div>
                                    <Link key={post.slug.current} href={`/blogs/${post.slug.current}`}>
                                        <button className="bg-red-500 text-white px-[8px] py-[4px] text-xs sm:text-sm hover:text-gray-200 mt-4">
                                            Read More <i className="fas fa-angle-right text-xs"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

