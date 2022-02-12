import { FC, useState, useEffect } from "react";
import { Card } from "../../../molecules";
import { useQuery, useQueryClient } from "react-query";
import { fetchProducts } from "../../../../apis";

export const CardsSection: FC = ({}) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState([]);
  const queryClient = useQueryClient();

  // data get react query
  const { status, data, error, isFetching, isPreviousData } = useQuery<
    products[]
  >(["products", page], () => fetchProducts(page), {
    keepPreviousData: true,
    staleTime: 5000,
  });

  // search function
  const filtered = data?.filter((produc) =>
    produc.title.toLowerCase().includes(search?.toString().toLowerCase())
  );

  const searchProduc = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery(["products", page + 1], () =>
        fetchProducts(page + 1)
      );
    }
  }, [data, page, queryClient]);

  return (
    <>
      {status === "loading" && !error ? (
        <>
          <div>loading...</div>
        </>
      ) : (
        ""
      )}
      <div className="container mx-auto ">
        <div className=" grid gap-8 grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  ">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none  w-full h-14"
              placeholder="Search..."
              autoComplete="off"
              onChange={searchProduc}
            />
          </div>
          {filtered?.map((item) => {
            return (
              <Card
                key={item._id}
                ProductCardList={[
                  {
                    id: item._id,
                    title: item.title,
                    price: item.price,
                    photos: item.photos[0],
                    description: item.description,
                  },
                ]}
              />
            );
          })}
        </div>
      </div>
      <div>
        <ul className="flex justify-center items-center mt-16 mb-8">
          <button
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 1}
          >
            <a className="flex items-center font-bold" href="#">
              <span className="mx-1">Geri</span>
            </a>
          </button>
          <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a className="font-bold" href="#">
              {page + 1}
            </a>
          </li>

          <button
            className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg"
            onClick={() => {
              setPage((old) => (data ? old + 1 : old));
            }}
            disabled={isPreviousData || !data}
          >
            <a className="flex items-center font-bold" href="#">
              <span className="mx-1">İleri</span>
            </a>
          </button>
        </ul>
      </div>
    </>
  );
};
