import { useState } from "react";

import AwardsForm from "./AwardsForm";
import AwardsList from "./AwardsList";
import AwardsSkeleton from "./AwardsSkeleton";
import { useAddAwards } from "../../../hooks/useAwards/useAddAwards";
import { useDeleteAwards } from "../../../hooks/useAwards/useDeleteAwards";
import { useGetAwards } from "../../../hooks/useAwards/useGetAwards";
import { useUpdateAwards } from "../../../hooks/useAwards/useUpdateAwards";

function AwardsStructure() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [errors, setErrors] = useState({});

  const { data, isError, isLoading, error } = useGetAwards();
  const { mutate: addAwards } = useAddAwards();
  const { mutate: updateAwards } = useUpdateAwards();
  const { mutate: deleteAwards } = useDeleteAwards();

  // Validation
  const validateInput = (fields) => {
    const errors = {};
    if (!fields.name) errors.name = "Award name is required.";
    if (!fields.date) errors.date = "Date is required.";
    if (!fields.awarded) errors.awarded = "Awarded By is required.";
    return errors;
  };

  // Add Award
  const handleAddAwards = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAward = formData.get("name");
    const newDate = formData.get("date");
    const newAwarded = formData.get("awarded");

    const validationErrors = validateInput({ name: newAward, date: newDate, awarded: newAwarded });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addAwards({ name: newAward, date: newDate, awardedBy: newAwarded });
    setErrors({});
    setShowAddModal(false);
  };

  const handleAddCancel = () => {
    setErrors({});
    setShowAddModal(false);
  };

  // Update Award
  const handleUpdateModal = (award) => {
    setSelectedAward(award);
    setShowUpdateModal(true);
  };

  const handleUpdateCancel = () => {
    setErrors({});
    setShowUpdateModal(false);
    setSelectedAward(null);
  };

  const handleUpdateAwards = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedName = formData.get("name");
    const updatedDate = formData.get("date");
    const updatedAwarded = formData.get("awarded");

    const validationErrors = validateInput({
      name: updatedName,
      date: updatedDate,
      awarded: updatedAwarded,
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (selectedAward) {
      updateAwards({
        id: selectedAward.id,
        name: updatedName,
        date: updatedDate,
        awardedBy: updatedAwarded,
      });
    }
    setErrors({});
    handleUpdateCancel();
  };

  // Delete Award
  const handleDelete = (id) => {
    deleteAwards(id);
  };

  if (isLoading) return <AwardsSkeleton />;
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
        errors={errors}
      />
    </div>
  );
}

export default AwardsStructure;
