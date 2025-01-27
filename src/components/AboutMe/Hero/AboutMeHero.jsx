import AboutMeHeroText from "./AboutMeHeroText";
import AboutMeImg from "./AboutMeImg";
import useGetAboutMe from "../../../hooks/useGetAboutMe";

function AboutMeHero() {
  const { data, error } = useGetAboutMe();

  return (
    <div>
      <h1 className="text-[42px] md:text-[52px] lg:text-[64px] font-poppinsBold leading-[48px] text-veryDark mt-[50px] text-center">
        About me
      </h1>

      {Array.isArray(data) &&
        data.map((dataHero) => (
          <div key={dataHero.id}>
            <AboutMeImg dataHeroImg={dataHero.about_image} id={dataHero.id} />
            <AboutMeHeroText
              dataHeroText={dataHero.about_me}
              id={dataHero.id}
            />
          </div>
        ))}
    </div>
  );
}

export default AboutMeHero;
