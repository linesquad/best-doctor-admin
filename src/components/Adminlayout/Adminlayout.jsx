import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContentWrapper from "../MainContentWrapper";

const Adminlayout = ({ children }) => {
  return (
    <div className="bg-[#59749A]">
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
    </div>
  );
};

export default Adminlayout;
