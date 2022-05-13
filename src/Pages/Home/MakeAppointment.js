import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import ButtonPrimary from "../Shared/ButtonPrimary";
const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" srcset="" />
      </div>
      <div className="flex-1 text-white p-5">
        <h3 className="text-primary text-xl">Appointment</h3>
        <h2 className=" text-4xl py-5">Make an appointment Today</h2>
        <p className="pb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <ButtonPrimary>Get Started</ButtonPrimary>
      </div>
    </section>
  );
};

export default MakeAppointment;
