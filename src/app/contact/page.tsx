import Link from "next/link";
import Button from "../../components/button";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
    return (
        <div className="container max-w-[1880px] sm:h-[800px] h-[600px] p-4 space-y-4 mt-24 sm:flex ">
            <div className="text-center space-y-2 sm:ml-72 p-4 rounded-lg bg-gray-300 sm:h-fit">
                <h2 className="text-4xl font-bold">Have Queries<i className="fas fa-question-circle ml-2"></i></h2>
                <p className="sm:w-[290px]">Ask freely by filling the form below we are always available for your questions or you can just simply contact us on social media.</p>
            </div>
            <div className="space-y-8 sm:ml-72">
                <div className="space-y-4">
                    <form className="flex flex-col gap-y-6 sm:text-xl">
                        <div className="flex space-x-1">
                            <div className="sm:flex sm:flex-col">
                                <label>Name</label>
                                <input type="text" className="bg-gray-100 p-2 w-[180px] sm:w-[380px] border-2 border-gray-200" required />
                            </div>
                            <div className="sm:flex sm:flex-col">
                                <label>Email</label>
                                <input type="text" className="bg-gray-100 p-2 w-[170px] sm:w-[380px] border-2 border-gray-200" required />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label>What can we do for you ?</label>
                            <textarea className="bg-gray-100 p-2 sm:w-[770px] border-2 border-gray-200" rows={4} required />
                        </div>
                    </form>
                    <Button item="Send" />
                </div>

                <div className="flex text-4xl space-x-12 items-center ml-10 sm:ml-0">
                    <Link href={"/www.facebook.com"} target="blank">
                        <i className="fab fa-facebook text-blue-600"></i>
                    </Link>
                    <Link href={"https://www.instagram.com"} target="blank">
                        <i className="fab fa-instagram text-red-400"></i>
                    </Link>
                    <Link href={"https://www.linkedin.com"} target="blank">
                        <i className="fab fa-linkedin text-blue-800"></i>
                    </Link>
                    <Link href={"https://www.pinterest.com"} target="blank">
                        <i className="fab fa-pinterest text-red-600"></i>
                    </Link>
                </div>
            </div>

        </div>
    )
}