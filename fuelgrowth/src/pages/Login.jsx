import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { API_ROUTES, ROUTES } from "../constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUserSchema } from "../validations/loginUser";
import { FormErrorMessage } from "../components/FormErrorMessage";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import bcrypt from "bcryptjs";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [loginResponse, setLoginResponse] = useState();

  const { REGISTER, DASHBOARD } = ROUTES;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(loginUserSchema),
  });
  const { LOGIN } = API_ROUTES;
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const req = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });

      const data = await response.json();
      console.log("RESPONSE AFTER LOGIN", data);

      if (
        signIn({
          token: data.access,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: email },
        })
      ) {
        navigate("/");
      }

      console.log(data);
    } catch (err) {
      console.log("ERROR: ", err);
    }
    reset();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                  required=""
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
                  required=""
                />
                {errors.password && (
                  <FormErrorMessage errorMessage={errors.password?.message} />
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#2563eb] dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                {/* <a
                  href="#"
                  className="font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                > */}
                <Link
                  to={REGISTER}
                  className="font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                >
                  Sign up
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
