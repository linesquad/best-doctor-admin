import BannerStructure from "../components/Banner/BannerStructure";
import HomeCarousel from "../components/home/Carousel/HomeCarousel";
import DoctorBio from "../components/home/DoctorBiography/DoctorBio";
import HomeHero from "../components/home/Hero/HomeHero";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <HomeHero />
      <Services />
      <BannerStructure />
      <HomeCarousel />
      <DoctorBio />
    </>
  );
}

export default Home;
