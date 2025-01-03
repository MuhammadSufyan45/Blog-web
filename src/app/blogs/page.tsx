import { Data } from "../../data/page";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    return (
        <div className="container max-w-[1880px] p-2 sm:p-6 space-y-4">
            <h2 className="text-[#1b1b1b] text-4xl sm:text-6xl font-bold text-center font-serif">Blogs</h2>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
                {
                    Data.map((post) => {
                        return (
                            <div className="bg-white shadow-md p-4 flex flex-col sm:flex-row sm:gap-x-4 gap-y-2 rounded-lg">
                                <Image
                                    src={post.image}
                                    alt="fitness"
                                    height={200}
                                    width={400}
                                    className="rounded"
                                />
                                <div className="space-y-2 sm:space-y-4 sm:mt-6">
                                    <p className="bg-blue-500 bg-opacity-10 text-blue-700 text-sm px-2 py-[6px] w-fit rounded-xl">{post.category}</p>
                                    <div>
                                        <Link key={post.id} href={`/blogs/${post.id}`}>
                                            <h2 className="text-[#1b1b1b] text-xl font-sans sm:text-4xl">{post.title}</h2>
                                        </Link>
                                        <p className="text-gray-500 text-xs sm:mt-2">{post.author} | {post.date}</p>
                                    </div>
                                    <Link key={post.id} href={`/blogs/${post.id}`}>
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

