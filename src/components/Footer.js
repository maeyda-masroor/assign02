//Footer using 4grid when on lg ,xl , 2xl and 1 col when on sm,md
import Link from "next/link"
export default function Footer(){
    return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4  bg-blue max-w-9xl mx-auto text-center lg:text-left">
        <div className="h-auto p-4 text-white">
            <h1 className="text-4xl">Whitespace</h1>
            <p className="text-md">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>
        <div className="h-auto p-4 text-white">
            <h3>
                Product
            </h3>
            <br/>
            <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer Stories</li>
            </ul>
        </div>
        <div className="h-auto p-4 text-white">
            <h3>
                Resources
            </h3>
            <br/>
            <ul>
            <li>Blog</li>
            <li>Guide & tutorial</li>
            <li>Help Center</li>
              </ul>
        </div>
        <div className="h-auto p-4 text-white">
            <h3>
                About us
            </h3>
            <br/>
            <ul>
                <li>About us</li>
                <li>Career</li>
                <li>Media List</li>
            </ul>
        </div>
        <div className="h-auto p-4 text-white">
            <h3>
                Try It Today
            </h3>
            <br/>
            <div className="text-white">
            Get started for free.
Add your whole team as your needs grow. 
            </div>
            <br/>
            <button className="bg-lightblue text-white py-2 px-2">Start Today - </button>
        </div>
    </div>
    
}