import ServiceCardItem from "./ServiceCardItem";

function ServiceGrid({ services, openModalId, toggleModal, fileInputRef,handleDelete }) {
  return (
    <div className="grid grid-cols-1 gap-20 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {services?.map((service) => (
        <ServiceCardItem
          key={service.id}
          service={service}
          openModalId={openModalId}
          toggleModal={toggleModal}
          fileInputRef={fileInputRef}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ServiceGrid;
