import { async } from "@firebase/util";
import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const { register, handleSubmit } = useForm();

  if (sending) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    console.log(data);
    sendPasswordResetEmail(data.email);
  };
  return (
    <div className="h-screen flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Forgot Password</span>
          </label>
          <input
            type="email"
            name="{...register}"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("email")}
          />
          <label class="label">
            <span class="label-text-alt">{error?.message}</span>
          </label>
        </div>

        {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
        <input
          className="btn w-full max-w-xs"
          type="submit"
          value="Reset Link"
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
