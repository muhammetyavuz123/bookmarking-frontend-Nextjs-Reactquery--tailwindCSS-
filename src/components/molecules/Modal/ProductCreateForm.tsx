import { FC } from "react";
import { Button, Input, SelectInput } from "../../atoms";

export const ProductCreateForm: FC<{}> = () => {
  return (
    <>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <Input
                    type="text"
                    label="Ürün Kodu"
                    name="first-name"
                    id="first-name"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Input
                    type="text"
                    label="ürün Adı"
                    name="first-name"
                    id="first-name"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Input
                    type="text"
                    label="Ürün Adedi"
                    name="first-name"
                    id="first-name"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <SelectInput
                    id="country"
                    name="country"
                    label="Ürün Adet Türü"
                    optionList={[
                      {
                        optionName: "Adet",
                      },
                      {
                        optionName: "Paket",
                      },
                      {
                        optionName: "Kg",
                      },
                      {
                        optionName: "Koli",
                      },
                    ]}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <SelectInput
                    id="country"
                    name="country"
                    label="Tür"
                    optionList={[
                      {
                        optionName: "adasdasd",
                      },
                      {
                        optionName: "adasdasd",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Button label="Ürün Ekle" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
