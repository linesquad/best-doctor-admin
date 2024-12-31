import ServiceModal from "./ServiceModal";
import Modal from ".././Modal";
import DoctorLogo from "../../../public/images/doctorLogo.jpg";
import menuLogo from "../../../public/images/dots.png";

function ServiceCardItem({ service, openModalId, toggleModal, fileInputRef,handleDelete }) {
  return (
    <div className="flex flex-col items-center rounded-lg p-4 shadow-custom-light relative">
      <img
        src={service.image || DoctorLogo}
        alt="Service"
        className="w-full h-[14rem] rounded-lg mb-2 cursor-pointer"
      />
      <img
        onClick={() => toggleModal(service.id)}
        src={menuLogo}
        alt="Dots"
        className="w-10 absolute right-2 cursor-pointer hover:scale-110"
      />
      {openModalId === service.id && (
        <Modal>
          <ServiceModal
            service={service}
            fileInputRef={fileInputRef}
            closeModal={() => toggleModal(null)}
            handleDelete={handleDelete}
          />
        </Modal>
      )}
      <p className="text-xl font-medium text-lightBlue cursor-pointer">
        {service.title}
      </p>
      
    </div>
  );
}

export default ServiceCardItem;
