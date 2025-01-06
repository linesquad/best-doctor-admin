import Footer from "./Footer";
import Header from "./Header";
import MainContentWrapper from "./MainContentWrapper";

const Adminlayout = ({ children }) => {
  return (
    <>
      <MainContentWrapper>
        <Header />
        <main>{children}</main>

        <Footer
          title="Contact Info"
          size="text-[3rem]"
          color="text-black"
          fontWeight="font-bold"
        />
      </MainContentWrapper>
    </>
  );
};

export default Adminlayout;
