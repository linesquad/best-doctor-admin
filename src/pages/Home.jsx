import BannerStructure from "../components/Banner/BannerStructure";
import DoctorBio from "../components/home/DoctorBiography/DoctorBio";
import Services from "../components/Services";

function Home() {
  return (
    <div>
      <Services />
      <BannerStructure />

      <DoctorBio />
    </div>
  );
}

export default Home;
