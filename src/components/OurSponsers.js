import Image from "next/image";
import Google from '../public/google.png';
import Slack from '../public/slack.png';
import Microsoft from '../public/Microsoft.png';
import Apple from '../public/Apple.png';
export default function Sponsers(){
    return <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
        <h1 className="text-4xl text-black ">Our<span className="underline decoration-yellow-200">
            Sponsers</span>
        </h1> 
    </div>
    <br/>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4  bg-white max-w-9xl mx-auto pl-20 lg:pl-56">
    <div className="">
        <Image src={Google}/>
    </div>
    <div className="">
        <Image src={Slack}/>
    </div>
    <div className="">
        <Image src={Microsoft}/>
    </div>
    <div className="">
        <Image src={Apple}/>
    </div>
    </div>       
    </section>
}