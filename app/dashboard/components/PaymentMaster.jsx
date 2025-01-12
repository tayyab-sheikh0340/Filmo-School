import React from 'react'
import master from "../../../assets/dashboard/master.png"
import Image from 'next/image';

const PaymentMaster = () => {
  const cardArr = [
    {
      number: "4855 **** **** ****",
      expire: "04/24",
      name: "Monica Alice",
      type: "mastercard",
    },
  ];
  return (
    <div>
      {cardArr.map((item, index) => (
        <section
          key={index}
          className="bg-white  flex justify-center items-center"
        >
          <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/Zi6v09P.png"
              alt="Card Background"
            />
            <div className="w-full px-8 absolute top-8">
              <Image src={master} />
              <div className="mt-6">
                <p className="font-medium tracking-more-wider">{item.number}</p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="font-light text-xs">Expires</p>
                    <p className="font-medium tracking-wider text-sm">
                      {item.expire}
                    </p>
                  </div>
                  <div>
                    <p className="font-light text-xs">CARD NAME</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default PaymentMaster
