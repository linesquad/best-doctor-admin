import BannerStructure from "../components/Banner/BannerStructure";
import DoctorBio from "../components/home/DoctorBiography/DoctorBio";
import HomeHero from "../components/home/Hero/HomeHero";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <HomeHero />
      <Services />
      <BannerStructure />
      <DoctorBio />
    </>
  );
}

export default Home;
