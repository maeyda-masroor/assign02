import Image from "next/image";
import Apple from '../public/apple-black-logo.png';
import Window from '../public/windows-logo.png';
import Android from '../public/android-logo.png';
export default function TryWhiteSpce(){
    return (
        <section className="bg-blue py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
                <h1 className="text-4xl text-white">
                Try Whitepace 
                <br/>
                today
                </h1>
                <p className="text-lg text-white">Get started for free.,<br/>
                Add your whole team as your needs grow.</p>
                <br/>
                <button className="bg-lightblue w-auto text-white p-4">Try Taskey today-</button>
                <br/>
                <p className="text-lg text-white">
                On a big team? Contact sales
                </p>
                <div className="flex justify-center gap-5">
                    <h1 className="text-xl"><Image src={Apple} width={50} height={50}/></h1>
                    <h1 className="text-xl"><Image src={Window} width={50} height={50}/></h1>
                    <h1 className="text-xl"><Image src={Android} width={50} height={50}/></h1>
                </div>
            </div>
        </section>
     
    )
}