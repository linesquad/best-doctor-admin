function AboutMeArticleButton({ handleArticleClick }) {
  return (
    <button
      className="w-full rounded-[48px] bg-[#004682] text-[#CBDEEF] font-robotoMedium text-[17px] flex max-w-[397.249px] h-[71.966px] px-4 py-3 justify-center items-center gap-2 flex-shrink-0"
      type="button"
      onClick={handleArticleClick}
    >
      Add New
    </button>
  );
}

export default AboutMeArticleButton;
