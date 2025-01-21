
import AwardsAddModal from "./AwardsAddModal";
import AwardsUpdateModal from "./AwardsUpdateModal";
import CustomButton from "../../../ui/CustomButton";

function AwardsForm({ handleAddAwards,showAddModal,setShowAddModal,handleAddCancel,handleUpdateCancel,handleUpdateAwards,showUpdateModal,setShowUpdateModal,name,date,awardedBy,errors }) {
  return (
    <div className="mt-8 flex justify-center">
      <CustomButton
        name="Add New Award"
        color="text-lightGrey"
        weight={"font-normal"}
        bg="bg-darkBlue"
        paddingX="px-10"
        paddingY="py-3"
        rounded="rounded-[3rem]"
        maxW={"w-full lg:w-[30rem]"}
        onClick={() => setShowAddModal(true)}
        scale={"hover:scale-105"}
      />
      <AwardsAddModal handleAddAwards={handleAddAwards} showAddModal={showAddModal} handleAddCancel={handleAddCancel} errors={errors}/>
      <AwardsUpdateModal handleUpdateCancel={handleUpdateCancel} handleUpdateAwards={handleUpdateAwards} showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} name={name} date={date} awardedBy={awardedBy} errors={errors}/>
    </div>
  );
}

export default AwardsForm;
