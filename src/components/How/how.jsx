import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Search, check eligibility, and join a trial to help advance medical research.</p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#1a73e8] border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl text-white font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Find a Trial</h3>
                            <p className="mt-4 text-base text-gray-600">Search from 66,000+ clinical trials based on your location, condition, or area of interest.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#1a73e8] border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl text-white font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Check Eligibility</h3>
                            <p className="mt-4 text-base text-gray-600">Review the study details and see if you meet the requirements to participate.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#1a73e8] border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl text-white font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Join & Contribute</h3>
                            <p className="mt-4 text-base text-gray-600">Enroll in the trial and play a vital role in advancing medical research and treatments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;