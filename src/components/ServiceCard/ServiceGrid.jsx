import ServiceCardItem from "./ServiceCardItem";
import ServiceSkeleton from "./ServiceSkeleton";

function ServiceGrid({
  services,
  openModalId,
  toggleModal,
  fileInputRef,
  handleDelete,
  isLoading
}) {
  return (
    <div className="grid grid-cols-1 gap-20 gap-y-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <ServiceSkeleton key={index} />
          ))
        : services.slice(0,6).map((service) => (
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

export default ServiceGrid
