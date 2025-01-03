import Category from "@/components/categories";
import Blogs from "./blogs/page";

export default function Home() {
  return (
   <div className="container max-w-[1880px]">
   <Blogs />
   <Category />
   </div>
  );
}
