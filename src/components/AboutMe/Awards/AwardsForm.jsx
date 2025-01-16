
import AwardsAddModal from "./AwardsAddModal";
import CustomButton from "../../../ui/CustomButton";

function AwardsForm({ handleAddAwards,showAddModal,setShowAddModal,handleAddCancel }) {
  return (
    <div>
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
      <AwardsAddModal handleAddAwards={handleAddAwards} showAddModal={showAddModal} handleAddCancel={handleAddCancel}/>
    </div>
  );
}

export default AwardsForm;
