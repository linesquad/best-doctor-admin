import AboutMeImg from "./AboutMeImg";
import useGetAboutMe from "../../../hooks/useGetAboutMe";

function AboutMeHero() {
  const { data, error } = useGetAboutMe();

  return (
    <div>
      <h1 className="sm:text-[42px] md:text-[52px] lg:text-[64px] font-poppinsBold leading-[40px]   text-veryDark mt-[50px] text-center">
        About me
      </h1>
      {Array.isArray(data) &&
        data.map((dataHero) => (
          <AboutMeImg key={dataHero.id} dataHeroImg={dataHero.about_image} id={dataHero.id}/>
        ))}
    </div>
  );
}

export default AboutMeHero;
