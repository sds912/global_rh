import React from 'react'
import { makeStyles} from '@material-ui/core';
import './style.scss'


const useStyles = makeStyles((theme) => ({

   

}))




const Sectors = () => {

    const classes = useStyles();

        return (
            <div className="container mb-5 mt-5">
                <h5 className="text-center h3">Secteur d'activité</h5>
               <div className="row">
                   <div className="col-sm-2 col-6 mt-5 py-2  expertise">
                       <img src={"car.png"}   />
                       <h4 className='text-white text-center mt-1'>Transport</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5  py-2 expertise">
                       <img src={"doctor.png"} />
                       <h4 className='text-white text-center mt-1'>Santé</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"gear.png"} />
                       <h4 className='text-white text-center mt-1'>Energie</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"hotel.png"} />
                       <h4 className='text-white text-center mt-1'>Restaurant</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"money.png"} />
                       <h4 className='text-white text-center mt-1'>Finance</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 px-0 w-100 py-2 expertise">
                       <img src={"boat.png"} style={{
                       width:"120px",
                       border: "1px solid gray"
                   }}
                   
                     />
                     <h4 className='text-white text-center mt-1'>Marine</h4>
                  </div>

                   
               <div className="col-sm-2 col-6 mt-5 px-0 w-100 py-2 expertise"  >
                   <img src={"training.png"} style={{
                       width:"120px",
                       border: "1px solid gray"
                   }}  />
                   <h4 className='text-white text-center mt-1'>Education</h4>
                   </div>

                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"plane.png"} />
                       <h4 className='text-white text-center mt-1'>Voyage</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"bank.png"}/>
                       <h4 className='text-white text-center mt-1'>Banque</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"telecommunication.png"}/>
                       <h4 className='text-white text-center mt-1'>Télécom</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"shop.png"}/>
                       <h4 className='text-white text-center mt-1'>Commerce</h4>
                    </div>
                   <div className="col-sm-2 col-6 mt-5 py-2 expertise">
                       <img src={"urban.png"} />
                       <h4 className='text-white text-center mt-1'>Hôtellerie</h4>
                    </div>
               </div>
                
                
            </div>
        )
    
}

export default Sectors
