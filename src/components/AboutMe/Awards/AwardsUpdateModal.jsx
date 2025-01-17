
import ReusableUpdateModal from "../../ReusableAbout/ReusableUpdateModal"


function AwardsUpdateModal({handleUpdateCancel,handleUpdateAwards,showUpdateModal,name,date,awardedBy}) {
  return (
    <div>
      <ReusableUpdateModal
        title="Update Award"
        showUpdateModal={showUpdateModal}
        fields={[
          {
            label: "Award Name",
            defaultValue: name, 
            name: "name",
            type: "text",
            placeholder: "Enter Award name",
          },
          {
            label: "Award Date",
            defaultValue: date, 
            name: "date",
            type: "date",
            placeholder: "Enter Award Date",
          },
          {
            label: "AwardedBy",
            defaultValue: awardedBy, 
            name: "awarded",
            type: "text",
            placeholder: "Enter AwardBy",
          }
        ]}
        onCancel={handleUpdateCancel}
        onSubmit={handleUpdateAwards}
      />
    </div>
  )
}

export default AwardsUpdateModal