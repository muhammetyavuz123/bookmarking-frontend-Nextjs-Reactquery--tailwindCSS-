import Link from "next/link";
import { FC } from "react";
import { LeftImageCard, RightFormCard, LoginForm } from "../../molecules";

export const LoginSection: FC<{}> = () => {
  return (
    <>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <LeftImageCard
            title="Kitap Paylaş"
            subTitle="Okuduğun kitapları bizimle paylaşmaya ne dersin"
          />
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <RightFormCard
            title="Giriş"
            subTitle="Email Ve Şifrenizi Giriniz"
            registerAndLoginHref="/Auth/register"
            registerAndLogin="Kayıt Ol!"
            buttonTitle="Giriş "
          >
            <LoginForm />
          </RightFormCard>
        </div>
      </section>
    </>
  );
};
