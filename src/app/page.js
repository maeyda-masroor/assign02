import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import HeroSection2 from "@/components/HeroSection2";
import TryWhiteSpce from "@/components/TryWhiteSpace";
import ClientSays from "@/components/ClientSays1";
import FavouriteApp from '../components/FavouriteApp';
import Sponsers from "@/components/OurSponsers";
import YourWork from '../components/YourWork';
import Plan from "@/components/Plan";
import Extension from '../components/Extension';
import Work from '../components/WorkTogether';
import HeroSection0 from "../components/HeroSection0";
export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection0/>
      <HeroSection/>
      <Work/>
      <HeroSection2/>
      <Extension/>
      <Plan/>
      <YourWork/>
      <Sponsers/>
      <FavouriteApp/>
      <ClientSays/>
      <TryWhiteSpce/>
    </div>
  );
}
