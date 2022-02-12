import { FC } from "react";

export const LeftImageCard: FC<{ title: string; subTitle: String }> = ({
  title,
  subTitle,
}) => {
  return (
    <>
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-left tracking-wide">{title}</h1>
        <p className="text-3xl my-4">{subTitle}</p>
      </div>
    </>
  );
};
