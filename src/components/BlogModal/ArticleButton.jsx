import CustomButton from "../../ui/CustomButton";

function ArticleButton({handleArticleClick}) {
  return (
    <div onClick={handleArticleClick} className="flex justify-center items-center ">
      <div className="w-full flex justify-center items-center hover:scale-125 transition-transform duration-700">
      <CustomButton 
        name="Add New Article"
        type="submit"
        color="text-black"
        bg="bg-lightGrey"
        paddingX="px-20"
        paddingY="py-4 lg:py-6"
        width="w-[100%]"
        weight="font-semibold"
        marginT="mt-4"
        rounded="rounded-3xl"
      />

      </div>
    </div>
  );
}

export default ArticleButton;
