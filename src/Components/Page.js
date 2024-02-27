import React from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Logo from "../images/logo.png";

const Page = () => {
  return (
    <>
      <div className="Container">
        <div className="Heading">
          <div className="Logo">
            <img src={Logo} alt="Logo"></img>
          </div>
          {/* <div className="H-Content">
            <strong>C.R.I. Fluid Systems.</strong>
            <p>Pumping Trust. Worldwide.</p>
          </div> */}
        </div>
        <div className="Content">
          <div className="Image1">
            <img src={Image1} alt="Image1"></img>
          </div>
          <div className="Details">
            <div className="Dt-Heading">
              <p>
                {" "}
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </p>
            </div>
            <div className="Dt-Data">
              <ul className="Dt-List">
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
            </div>
            <div className="Dt-Image">
              <img src={Image2} alt="Image2"></img>
            </div>
            <div className="Dt-Conclusion">
              <p>
                Government of India has awarded the{" "}
                <strong>"National Energy Conservation Award 2018"</strong>. Mr.
                G. Selvaraj, Joint Managing Director of C.R.I. Group received
                the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
                Shri. Raj Kumar Singh, Honorable Minister of State.
              </p>
            </div>
          </div>
        </div>
        <div className="Main-Content">
          <div className="Mc-Content">
            <p>
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.
            </p>
          </div>
          <div className="Mc-Image">
            <img src={Image3} alt="Image3"></img>
          </div>
          <div className="Mc-List">
            <p>
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </p>
          </div>
        </div>
        <div className="Last-Content">
          <div className="L-Head">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </div>
          <div className="L-List">
            CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA
            SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING
            FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE & RESIDENTIAL
          </div>
        </div>
        <div className="Footer">
          <ul className="Ft-List">
            <li>Toll Free 1800 200 1234</li>
            <li>www.facebook.com/cripumps</li>
            <li>www.crigroups.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
