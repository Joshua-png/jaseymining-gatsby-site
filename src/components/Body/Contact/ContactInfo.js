import React from 'react';
import Title from '../Title';
import Dots from '../Dots';
import {Call, LocationOn, Mail, PinDrop} from "@material-ui/icons";

export default function ContactInfo(){
    return(
        <section className="site-section bg-light" id="section_4" data-aos="fade">
           <div className="container">
              <div className="mb-5 text-center">
                  <Title text="Contact Us"/>
              </div>
              <Dots />

        <div className="row mb-5">
          <div className="col-md-3 text-center">
            <div className="mb-4"> 
            <div><LocationOn fontSize="large" style={{ color: 'green' }}/></div>
              <span className="mt-2">Tarkwa, Western Region
                Ghana
                Digital Address
              </span>
            </div>
          </div>


          <div className="col-md-3 text-center">
            <div className="mb-4">
            <div><PinDrop fontSize="large" style={{ color: 'green' }}/></div>
              <span className="mt-2"> P.O Box 19540
                Accra North
                Ghana
              </span>
            </div>
          </div>


          <div className="col-md-2 text-center">
            <div className="mb-4">
              <div><Call fontSize="large" style={{ color: 'green' }}/></div>
              <p  className="text-black mt-2">+233 244132705</p>
              <p className="text-black">+233 264132705</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="mb-0">
              <div><Mail fontSize="large" style={{ color: 'green' }}/></div>
              <p className="text-black mt-2">joseph.wilson-sey@jaseyminingservices.com</p>
              <p className="text-black">jaseyminingservices@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>          
    );
}