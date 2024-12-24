import MainContentWrapper from "../MainContentWrapper";
import useGetHero from "../../hooks/useGetHero";
import CustomButton from "../../ui/CustomButton";
import HeroSkeleton from "../skeletons/HeroSkeleton";
import ErrorDisplay from "../ErrorDisplay";

function HomeHero() {
  const { data, isLoading, isError, error } = useGetHero();
  if (isLoading) return <HeroSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  return (
    <section>
      <MainContentWrapper>
        <div
          className={`bg-[url('/images/hero.png')] bg-no-repeat  bg-cover bg-center min-h-[390px] 
            flex items-center max-w-ful sm:min-h-[557px] lg:min-h-screen relative`}
        >
          <div className=" pl-[37px] md:pl-[123px] lg:pl-[212px]">
            {data?.map((items) => (
              <div key={items.id} className="flex flex-col gap-2 md:gap-4">
                <h1
                  className="font-poppinsBold leading-[40px] z-10  text-[32px] lg:text-[80px]  lg:leading-[110px] capitalize
                text-transparent bg-gradient-to-b from-[#07D] to-[#004077] bg-clip-text"
                >
                  {items.main_heading}
                </h1>
                <h3 className="text-white font-poppinsRegular leading-[25px] text-[16px] lg:text-[36px] lg:leading-[35px] capitalize ">
                  {items.sub_heading}
                </h3>
                <CustomButton
                  name={"BOOK APPOINTMENT"}
                  color={"text-white"}
                  bg={"bg-[#004682]"}
                  width={"w-fit"}
                  paddingX={"px-[14px]"}
                  paddingY={"py-[16px]"}
                  textSize={"text-[10px]"}
                  font={"font-robotoBold"}
                  weight={"font-bold"}
                  rounded={"rounded-[8px]"}
                />
              </div>
            ))}

            <div className=" z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ">
              <img
                src="./images/upload.svg"
                alt="upload"
                className="cursor-pointer lg:w-[125px]"
              />
              <p
                className="font-heeboRegular hidden lg:flex text-[36px] text-[#21243D] 
              cursor-pointer bg-[#CBDEEF80] px-[15px] py-[8px] "
              >
                Upload New Picture
              </p>
            </div>
          </div>
        </div>
      </MainContentWrapper>
    </section>
  );
}

export default HomeHero;
