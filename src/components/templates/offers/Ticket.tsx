import React, { useState } from "react";

function Ticket() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const IsInputValid: () => void = () => {
    if (email.trim().length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const changeHandler: (value: string) => void = (value:string) => {
      setEmail(value)
      if(email.trim().length > 0) {
        setError(false)
      }else {
        setError(true)
      }
  }

  return (
    <section className="ticket-section mt-24 py-12 md:py-0 bg-offers-bg bg-cover bg-center flex items-center justify-center min-h-[354px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-y-0 lg:grid-cols-3">
        <div className="left-seciton flex text-center md:text-left flex-col justify-center">
          <h4 className="left-section__title font-bold uppercase text-[36px] tracking-widest">
            stay
          </h4>
          <h5 className="left-section__subtitle uppercase text-[36px] tracking-widest font-normal">
            connected
          </h5>
          <span className="block text-[15px] text-text mt-4">
            Subscribe to our newsletter
          </span>
        </div>
        <div className="center-section  flex items-center justify-center">
          <div className="email-input__wrapper w-full border-b border-b-[#e1e1e1] relative">
            <input
              type="text"
              value={email}
              onChange={(event) => changeHandler(event.target.value)}
              onBlur={() => IsInputValid()}
              placeholder="Enter your e-mail address"
              className="text-[18px] placeholder:text-[18px] placeholder:font-light placeholder:text-center text-center
               placeholder:text-title border-none outline-none p-4 bg-transparent w-full mb-4"
            />
            {error && (
              <span className="error absolute right-0 left-0 text-[10px] bottom-0 text-right border-b border-b-red-600 text-red-600">
                The text field is required.
              </span>
            )}
          </div>
        </div>
        <form className="right-section flex md:translate-x-48 lg:translate-x-0  items-center justify-center">
            <button type="submit" className="bg-primary mx-auto hover:bg-hover transition-all p-6 rounded-lg
            text-white text-[14px] shadow-box font-bold px-16 flex items-center justify-center
            uppercase tracking-wider">subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Ticket;
