import { useState } from "react";

import AwardsForm from "./AwardsForm";
import AwardsList from "./AwardsList";
import { useAddAwards } from "../../../hooks/useAwards/useAddAwards";
import { useGetAwards } from "../../../hooks/useAwards/useGetAwards";

function AwardsStructure() {
  const [showAddModal, setShowAddModal] = useState(false);
  const { data, isError, isLoading, error } = useGetAwards();
  const { mutate: addAwards } = useAddAwards();

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <div>
      <AwardsList data={data.award} />
      <AwardsForm
        handleAddCancel={handleAddCancel}
        handleAddAwards={handleAddAwards}
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />
    </div>
  );
}

export default AwardsStructure;
