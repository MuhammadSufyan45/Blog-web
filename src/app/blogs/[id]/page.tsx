import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from "../../../components/button";
import Link from "next/link";
// import {Data} from "../../../data/page";
import Comment from "../../../components/comment";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { components } from "@/components/customcomponent";

export const revalidate = 10; // seconds

export default async function Details({ params }: { params: { id: string } }) {

    const { id } = params;
    const query = `*[_type=='blog' && slug.current=="${id}"]{
  category,image,date,slug,title,description,content,
    writer->{name}
}`;

    const Data = await client.fetch(query);


    const post = Data.find((post: any) => post.slug.current === id);

    if (!post) {
        return (
            <div>
                <h1>Post not found</h1>
                <button className="bg-red-500 px-2 py-1 text-white hover:bg-red-400 ml-[510px] mt-6">
                    <Link href="/">Go Back</Link>
                </button>
            </div>
        );
    }

    return (
        <div className="sm:p-8 p-4">
            <div className="mb-6">
                <Link href={"/"}><i className="fas fa-arrow-left text-lg sm:text-2xl"></i></Link>
            </div>
            <div className="flex flex-col gap-y-[2px] sm:p-16 container max-w-[1880px]">

                {/* Image */}
                <div className="sm:flex sm:border-4 border-red-300 sm:p-2">
                    <Image src={urlFor(post.image).url()} alt="health" width={600} height={200} className="rounded shadow-md shadow-red-300 sm:shadow-none" />

                    {/* Post Info */}
                    <div className="px-2">
                        <div className="flex items-center justify-between border-b-4 sm:border-none py-4">
                            <p className="text-xs text-gray-500 bg-green-200 p-[4px] rounded-lg mt-[6px]"><i className="fas fa-user text-xs mr-1"></i>{post.writer.name}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                        <h2 className="text-2xl font-bold text-center mt-4 sm:mt-10 sm:text-4xl sm:text-left">{post.title}</h2>
                        <p className="hidden sm:block mt-4 w-[870px]">{post.description}</p>
                    </div>
                </div>

                {/* Post Content */}
                <section className="p-2 space-y-2 sm:space-y-6">
                    <PortableText value={post.content} components={components}/>
                </section>
                <Link href={"./"} className="mt-6"><Button item="Go Back" /></Link>
            </div>
            <div className="w-auto h-[2px] mt-8 sm:mt-0 bg-gray-900 rounded"></div>
            <div>
                <Comment />
            </div>
        </div>
    )
};
