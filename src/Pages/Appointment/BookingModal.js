import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-accent">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered input-accent w-full"
            />
            <select name="slot" class="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || " "}
              class="input input-bordered input-accent w-full"
            />

            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              class="input input-bordered input-accent w-full"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              class="input input-bordered input-accent w-full"
            />
            <input type="submit" value="submit" class="btn btn-accent w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
