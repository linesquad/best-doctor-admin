import { useGetFooter } from "../../hooks/useFooter/useGetFooter"


function SettingsBanner() {
  const {data,isError,isLoading,error} = useGetFooter()
  console.log(data)
  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    return <p>{error.message}</p>
  }
  return (
    <div className="bg-softBlue w-full h-[10rem]">

    </div>
  )
}

export default SettingsBanner