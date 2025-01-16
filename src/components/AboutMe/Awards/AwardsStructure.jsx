import { useState } from "react";

import AwardsForm from "./AwardsForm";
import AwardsList from "./AwardsList";
import { useAddAwards } from "../../../hooks/useAwards/useAddAwards";
import { useDeleteAwards } from "../../../hooks/useAwards/useDeleteAwards";
import { useGetAwards } from "../../../hooks/useAwards/useGetAwards";
import { useUpdateAwards } from "../../../hooks/useAwards/useUpdateAwards";

function AwardsStructure() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  const { data, isError, isLoading, error } = useGetAwards();
  const { mutate: addAwards } = useAddAwards();
  const { mutate: updateAwards } = useUpdateAwards();
  const { mutate: deleteAwards } = useDeleteAwards();

  // Update functionality
  const handleUpdateModal = (award) => {
    setSelectedAward(award);
    setShowUpdateModal(true);
  };

  const handleUpdateCancel = () => {
    setShowUpdateModal(false);
    setSelectedAward(null);
  };

  const handleUpdateAwards = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedName = formData.get("name");
    const updatedDate = formData.get("date");
    const updatedAwarded = formData.get("awarded");

    if (selectedAward) {
      updateAwards({
        id: selectedAward.id,
        name: updatedName,
        date: updatedDate,
        awardedBy: updatedAwarded,
      });
    }
    handleUpdateCancel();
  };

  // Add functionality
  const handleAddCancel = () => {
    setShowAddModal(false);
  };

  const handleAddAwards = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAward = formData.get("name");
    const newDate = formData.get("date");
    const newAwarded = formData.get("awarded");
    addAwards({ name: newAward, date: newDate, awardedBy: newAwarded });
    handleAddCancel();
  };

  // Delete functionality
  const handleDelete = (id) => {
    deleteAwards(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <AwardsList
        data={data.award}
        handleUpdateModal={handleUpdateModal}
        handleDelete={handleDelete}
      />
      <AwardsForm
        handleAddCancel={handleAddCancel}
        handleAddAwards={handleAddAwards}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        handleUpdateCancel={handleUpdateCancel}
        handleUpdateAwards={handleUpdateAwards}
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        name={selectedAward?.name || ""}
        date={selectedAward?.date || ""}
        awardedBy={selectedAward?.awardedBy || ""}
      />
    </div>
  );
}

export default AwardsStructure;
