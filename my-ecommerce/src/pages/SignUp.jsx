import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const roles = [
  { id: "customer", name: "Customer" },
  { id: "store", name: "Store" },
  { id: "admin", name: "Admin" },
];

const SignUp = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "customer",
    },
    mode: "onChange",
  });
  const watchRole = watch("role_id");

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };

      if (data.role_id === "store") {
        formData.store = {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxId,
          bank_account: data.storeBankAccount,
        };
      }

      await api.post("/signup", formData);
      history.goBack();
      alert(
        "You need to click the link in the email to activate your account!"
      );
    } catch (error) {
      console.error("Signup error:", error);
      alert(
        error.response?.data?.message || "An error occurred during signup."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="font-montserrat bg-[#FAFAFA] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#23A6F0] py-6">
              <h2 className="text-3xl font-bold text-center text-white">
                Sign Up
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters long",
                    },
                  })}
                  className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.])(?=.*[a-zA-Z]).{8,}$/,
                      message:
                        "Password must include numbers, lowercase, uppercase, and special characters",
                    },
                  })}
                  className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  {...register("passwordConfirmation", {
                    required: "Please confirm your password",
                    validate: (val) =>
                      val === watch("password") || "Passwords do not match",
                  })}
                  className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                    errors.passwordConfirmation
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Confirm your password"
                />
                {errors.passwordConfirmation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.passwordConfirmation.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="role_id"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Role
                </label>
                <select
                  id="role_id"
                  {...register("role_id", { required: "Please select a role" })}
                  className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                    errors.role_id ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                {errors.role_id && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.role_id.message}
                  </p>
                )}
              </div>

              {watchRole === "store" && (
                <>
                  <div className="mb-6">
                    <label
                      htmlFor="storeName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Store Name
                    </label>
                    <input
                      type="text"
                      id="storeName"
                      {...register("storeName", {
                        required: "Store name is required",
                        minLength: {
                          value: 3,
                          message:
                            "Store name must be at least 3 characters long",
                        },
                      })}
                      className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                        errors.storeName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter store name"
                    />
                    {errors.storeName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.storeName.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="storePhone"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Store Phone
                    </label>
                    <input
                      type="tel"
                      id="storePhone"
                      {...register("storePhone", {
                        required: "Store phone is required",
                        pattern: {
                          value: /^(\+90|0)?[0-9]{10}$/,
                          message: "Please enter a valid Turkish phone number",
                        },
                      })}
                      className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                        errors.storePhone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter store phone"
                    />
                    {errors.storePhone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.storePhone.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="storeTaxId"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Store Tax ID
                    </label>
                    <input
                      type="text"
                      id="storeTaxId"
                      {...register("storeTaxId", {
                        required: "Store tax ID is required",
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message:
                            "Please enter a valid tax ID in the format TXXXXVXXXXXX",
                        },
                      })}
                      className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                        errors.storeTaxId ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter store tax ID"
                    />
                    {errors.storeTaxId && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.storeTaxId.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="storeBankAccount"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Store Bank Account (IBAN)
                    </label>
                    <input
                      type="text"
                      id="storeBankAccount"
                      {...register("storeBankAccount", {
                        required: "Store bank account is required",
                        pattern: {
                          value: /^TR\d{2}[0-9A-Z]{5}[0-9]{1}[0-9A-Z]{16}$/,
                          message: "Please enter a valid Turkish IBAN",
                        },
                      })}
                      className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
                        errors.storeBankAccount
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter IBAN"
                    />
                    {errors.storeBankAccount && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.storeBankAccount.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-[#23A6F0] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing Up...
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
