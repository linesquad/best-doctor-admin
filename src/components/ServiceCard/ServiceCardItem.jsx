import ServiceModal from "./ServiceModal";
import Modal from ".././Modal";

import DoctorLogo from "/images/doctorLogo.jpg";
import menuLogo from "/images/dots.png";

function ServiceCardItem({
  service,
  openModalId,
  toggleModal,
  fileInputRef,
  handleDelete,
}) {
  return (
    <div className="flex flex-col items-center rounded-lg p-4 shadow-custom-light relative hover:scale-110 transition-transform duration-500">
      <img
        src={service.image || DoctorLogo}
        alt="Service"
        className="w-full object-cover object-center h-[14rem] rounded-lg mb-2 cursor-pointer"
      />
      <img
        onClick={() => toggleModal(service.id)}
        src={menuLogo}
        alt="Dots"
        className="w-10 absolute right-2 cursor-pointer hover:scale-125 transition-transform duration-500"
      />
      {openModalId == service.id && (
        <Modal>
          <ServiceModal
            service={service}
            fileInputRef={fileInputRef}
            handleFileUploadClick={() => fileInputRef?.current?.click()}
            closeModal={() => toggleModal(null)}
            handleDelete={handleDelete}
          />
        </Modal>
      )}
      <p className="text-xl font-medium text-lightBlue cursor-pointer overflow-hidden text-ellipsis max-w-full">
        {service.title}
      </p>
    </div>
  );
}

export default ServiceCardItem;
