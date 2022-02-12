import { FC } from "react";
import { Input } from "../../atoms";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "../../../contexts/authContext";
import { loginFetch } from "../../../apis";
import { toast, ToastContainer } from "react-toastify";
interface IFormInput {
  email: string;
  password: string;
}
export const LoginForm: FC<{}> = () => {
  const router = useRouter();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const loginResponse = await loginFetch({
        password: data.password,
        email: data.email,
      });

      login(loginResponse.data);
      router.push("/");
    } catch (e: any) {
      const error = e.response.data.message;
      toast(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return error;
    }
  };
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
          <Link href="/auth/register" passHref>
            <a>Kayıt Ol</a>
          </Link>
        </div>
        <button
          type="submit"
          className="uppercase block w-full p-4 my-7 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
        >
          Giriş
        </button>
      </form>
    </div>
  );
};
