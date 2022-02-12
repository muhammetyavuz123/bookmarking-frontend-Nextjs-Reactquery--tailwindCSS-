import { FC } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchProduct, updateProduct } from "../../../apis";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../atoms";
import { toast, ToastContainer } from "react-toastify";
interface IFormInput {
  title: string;
  description: string;
  price: number;
  photos: string;
}

export const AdminProductDetail: FC<{}> = () => {
  const router = useRouter();

  const { id } = router.query;

  const { isLoading, error, data } = useQuery<product, Error>(
    ["admin:product", id],
    () => fetchProduct(id)
  );

  if (isLoading) {
    <div>...Loading</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const updateProductResponse = await updateProduct(id, {
        title: data.title,
        description: data.description,
        price: data.price,
        photos: data.photos,
      });
      //   login(registerResponse);

      toast("Kitap güncelleme işlemi başarılı!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // router.push("/profile");
    } catch (e: any) {
      const error = e.response.data.message;
      alert("işlem başarısız");

      return error;
    }
  };

  return (
    <>
      <section className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <ToastContainer />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          {/* <StatictisCard /> */}
          <div className="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4">
            <div className="container mx-auto mt-14 ">
              <div>
                {data ? (
                  <>
                    <div className="max-w-screen-lg mx-auto">
                      <div>
                        <h2 className="font-semibold text-xl text-gray-600">
                          Ürün Güncelleme
                        </h2>
                        <p className="text-gray-500 mb-6">
                          Form is mobile responsive. Give it a try.
                        </p>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 container mx-auto">
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                              type="title"
                              id="title"
                              placeholder="title"
                              defaultValue={data.title}
                              {...register("title", { required: true })}
                            />
                            <textarea
                              className="resize  rounded-md w-full h-32 mt-5  border-2 shadow-xl"
                              // type="description"
                              id="description"
                              placeholder="description"
                              defaultValue={data.description}
                              {...register("description", { required: true })}
                            ></textarea>
                            <Input
                              type="price"
                              id="price"
                              placeholder="price"
                              defaultValue={data.price}
                              {...register("price", { required: true })}
                            />
                            <div className="flex justify-center">
                              <button
                                type="submit"
                                className="uppercase text-white justify-center w-60 h-14 flex items-center p-4 my-7 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                              >
                                Güncelle
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  "Loading"
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
