import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      <div className="p-20 h-[100vh] flex bg-gray-200 gap-12 items-center justify-center">
        {/* -------------------------Left Side------------------------------  */}
        <div className="basis-[50%]">
          <img
            className="rounded-lg"
            src="/solutions/picture.png"
            alt="AI-image"
          />
        </div>

        {/* ----------------------------Right Side-------------------------------  */}
        <div className="flex flex-col gap-[40px] basis-[50%]">
          <h1 className="font-bold text-3xl">Get In Touch</h1>
          <span className="relative bottom-8">
            Rhoncus morbi et augue nec, in id ullamcorper at sit.{" "}
          </span>

          <form action="">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <label htmlFor="FirstName">FirstName</label>
                <input type="text" id="FirstName" placeholder="Placeholder" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="LastName">LastName</label>
                <input type="text" id="LastName" placeholder="Placeholder" />
              </div>
            </div>
          </form>

          {/* buttons  */}
          <div className="flex gap-3 items-center justify-end">
            <button className="gap-4 border-[2px] font-semibold bg-blue border-blue px-6 py-[7px] text-white">
              Button Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
