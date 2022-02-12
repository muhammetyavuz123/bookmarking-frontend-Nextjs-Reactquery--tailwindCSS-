/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";
import { Modal } from "../../atoms";

export const ProductTable: FC<{
  productList:
    | {
        id: string;
        productImage: string;
        productName: string;
        productCount: string;
        productDescription: string;
        productTotalPrice: number;
        productsDelete: () => void;
      }[]
    | undefined;
}> = ({ productList }) => {
  return (
    <>
      <h2 className="flex justify-center items-center mt-8 mb-8 text-2xl  font-semibold">
        Kitaplarım
      </h2>
      <div className="overflow-x-auto flex justify-center">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Kitap Adı</th>
                  <th className="py-3 px-6 text-center">Açıklama</th>
                  <th className="py-3 px-6 text-center"> Fiyat</th>
                  <th className="py-3 px-6 text-center">İşlemler</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {productList?.map(
                  (
                    {
                      productName,
                      productDescription,
                      productTotalPrice,
                      productImage,
                      id,
                      productsDelete,
                    },
                    index
                  ) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="w-6 h-6 rounded-full"
                              src={productImage}
                            />
                          </div>
                          <span>{productName}</span>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <span>{productDescription}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                          {productTotalPrice}₺
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <Link href={`/profile/${id}`}>
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </div>
                          <Modal modalDesctiption="Seçtiğiniz Ürünü Silmek İstediğinize Eminmisiniz">
                            <button onClick={productsDelete}>Sil</button>
                          </Modal>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span className="flex items-center col-span-3"> Göster 0-12</span>
              <span className="col-span-2"></span>
              {/* <!-- Pagination --> */}
              <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
