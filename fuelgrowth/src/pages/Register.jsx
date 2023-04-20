import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { registerUserSchema } from "../validations/registerUser";
import { yupResolver } from "@hookform/resolvers/yup";
import CreatableSelect from "react-select/creatable";
import { useEffect } from "react";
import { API_ROUTES, ROUTES } from "../constants/routes";
import { FormErrorMessage } from "../components/FormErrorMessage";
import { Link, useNavigate } from "react-router-dom";

import PI from "react-phone-input-2";
import toast from "react-hot-toast";
import authService from "../services/auth.service";

const PhoneInput = PI.default ? PI.default : PI;

export const Register = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState();
  const [isSubmitted, setIsSubmitted] = useState();

  const { LOGIN, DASHBOARD } = ROUTES;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = async (data) => {
    console.log({ data });

    const {
      email,
      fname,
      lname,
      password,
      role: { label, value },
      phone,
    } = data;
    const req = {
      first_name: fname,
      last_name: lname,
      email: email,
      password: password,
      role: value,
      mobile_number: phone,
    };

    try {
      setIsSubmitted(true);
      const result = await authService.register(req);
      if (result.data) {
        navigate(DASHBOARD);
      }
      console.log(data);
    } catch (error) {
      console.log("ERROR: ", error);
      toast.error(error.data.message);
    }
    setIsSubmitted(false);
    reset();
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await authService.getRoles();

        console.log("RESPONSE AFTER LOGIN", result.data.results);
        setRoles(result.data.results);
      } catch (err) {
        console.log("ERROR: ", err);
        toast.error(error.data.message);
      }
    })();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-full lg:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://media.licdn.com/dms/image/D4D0BAQEjOlWQBIYmHw/company-logo_200_200/0/1666808326958?e=1689811200&v=beta&t=1ogDgbIw7K-N_Oc-Pn2akMeeSM886smXZPKEDm6aSpk"
            alt="logo"
          />
          Fuelgrowth
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-2 md:space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="md:flex  justify-between ">
                <div>
                  <label
                    htmlFor="fname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("fname")}
                    id="fname"
                    placeholder="First name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  {errors.fname && (
                    <FormErrorMessage errorMessage={errors.fname?.message} />
                  )}
                </div>
                <div className="space-x-1">
                  <label
                    htmlFor="lname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lname")}
                    id="lname"
                    placeholder="Last name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  {errors.lname && (
                    <FormErrorMessage errorMessage={errors.lname?.message} />
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
                {errors.email && (
                  <FormErrorMessage errorMessage={errors.email?.message} />
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {errors.password && (
                  <FormErrorMessage errorMessage={errors.password?.message} />
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  {...register("confirm-password")}
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {errors["confirm-password"] && (
                  <FormErrorMessage
                    errorMessage={errors["confirm-password"]?.message}
                  />
                )}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select role
                </label>
                <Controller
                  name="role"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, ...field } }) => (
                    <CreatableSelect
                      {...field}
                      options={roles}
                      isClearable={true}
                      inputExtraProps={{
                        ref,
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  )}
                />

                {errors.role && (
                  <FormErrorMessage errorMessage={errors.role?.message} />
                )}
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile number
                </label>
                <Controller
                  control={control}
                  name="phone"
                  rules={{ required: true }}
                  render={({ field: { ref, ...field } }) => (
                    <PhoneInput
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      inputExtraProps={{
                        ref,
                        required: true,
                        autoFocus: true,
                      }}
                      country={"in"}
                      onlyCountries={["in"]}
                      countryCodeEditable={false}
                      specialLabel={"Player Mobile Number"}
                      inputStyle={{
                        width: "100%",
                        border: "none",
                        background: "rgb(249 250 251 / var(--tw-bg-opacity))",
                      }}
                    />
                  )}
                />

                {errors.mobile && (
                  <FormErrorMessage errorMessage={errors.mobile?.message} />
                )}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    {...register("terms")}
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#2563eb] dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              {errors.terms && (
                <FormErrorMessage errorMessage={errors.terms?.message} />
              )}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                {/* <a
                  href="#"
                  className="font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                > */}
                <Link
                  to={LOGIN}
                  className="font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
                {/* </a> */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
