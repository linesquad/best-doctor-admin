import { useState } from "react";

import { useGetBanner } from "../../hooks/useBanner/useGetBanner";
import useUpdateBanner from "../../hooks/useBanner/useUpdateBanner";

function BannerStructure() {
  const { data, error, isError, isLoading } = useGetBanner();
  const { updateDescription} = useUpdateBanner();

  const [updateText, setUpdateText] = useState(false)
  const bannerId = data?.description[0]?.id; 
  const currentDescription = data?.description[0]?.description;  
  console.log(bannerId,currentDescription);
  

  const handleUpdateDescription = (e) => {
    e.preventDefault()
    if (!bannerId) return; 
    setUpdateText(prev => !prev)  

    updateDescription({id: bannerId, description:currentDescription});
  };

  if (isLoading) {
    return <p>Loading banners...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="bg-softBlue text-[4rem] font-semibold py-[3.81rem] pl-[3.81rem] break-words mt-[8rem]">
        {currentDescription}
      </div>
      <form >
      <button onClick={handleUpdateDescription}>
      dak
      </button>
      {updateText ? <p>{currentDescription}</p> : <input type="text" name='text'/>}
      </form>
    </>
  );
}

export default BannerStructure;
