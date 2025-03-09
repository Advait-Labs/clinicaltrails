import React from 'react';
import './herostyles.css';

const HeroSection = () => {
    return (
       <>
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8" style={{
        marginTop: '40px'
      }}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                    <div className="text-center lg:text-left flex flex-col gap-x-12" style={{
                        gap: '14px'
                    }}>
                        <h2 className="hero_title font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj" style={{
                            fontSize: '46px',
                            lineHeight: '1.4em'
                        }}
                        
                        >Search for Clinical Trials Near You – Contribute to Life-Changing Discoveries</h2>
                        

                        <a class="wp-block-button__link wp-element-button" href="#">Search 66,000+ Clinical Trials</a>
                    </div>

                 
                </div>

                <div>
                    <img className="w-full hero-image" src="clinicaltrails.png" alt="" 
                     layout="responsive"
                     loading="lazy"
                     
                    />
                </div>
            </div>
        </div>
    </section>
       </>
    );
};

export default HeroSection;
