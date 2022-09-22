import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-screen-md px-4 py-6 mx-auto border-2">
        <h1 className="text-gray-800 text-xl  font-semibold mb-2 ">
          How It Works
        </h1>
        <p className="text-gray-500 text-lg mb-6 ">
          Hiteri is a crowdfunding platform through which you can help someone
          in need today. Crowdfunding is simple. You look at a cause, an appeal
          and choose who you want to support in fulfilling their cause by
          donating or sharing it on your social media.
        </p>
        <h2 className="text-gray-800 text-xl  font-semibold mb-2 ">Steps</h2>
        <ol class="list-disc list-inside text-gray-500 text-lg mb-6">
        <li>Press the donate button on the home page and choose from the fundraisers that you would like to donate to.</li>
        <li>OR view the list of causes from the many categories that we have divided the fundraisers into. Once you have selected a fundraiser, you can read about the CSO/ NGO or the individual appeal it belongs to and you can also see the details of the fundraiser so far (total amount, funds raised, number of donors etc.)</li>
        <li>Press the donate button. You can donate online through e-sewa for the transaction.</li>
        <li>If, in any case you do not wish to make online payments, we also accept cheques and cash. For that, you will need leave a message on the site itself or drop us an email at</li>
        <li>We will contact you for the cheque pick up or you can also deposit the amount to the bank account that we provide. Once your donation is received, you will be notified and you will also be able to see your name on the ‘donors/supporters’ list and the amount that you donated (should you choose to provide your name).  This is the easiest way for CSO/ NGOs and individuals to raise funds and for donors to support the causes.</li>
        </ol>
      </div>
    </div>
  );
};

export default HowItWorks;
