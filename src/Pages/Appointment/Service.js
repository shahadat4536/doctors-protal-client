import React from "react";
import ButtonPrimary from "../Shared/ButtonPrimary";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class=" text-2xl text-secondary">{name}</h2>
        <p className="">
          {slots?.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              No Slot Available. Try another date
            </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} spaces
          available
        </p>
        <div class="card-actions justify-center">
          <button className="">
            <label
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              for="booking-modal"
              class="btn btn-sm btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary modal-button"
            >
              Book Appointment
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
