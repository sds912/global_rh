import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import MainButton from '../buttons/MainButton';

const useStyles = makeStyles((theme) => ({

   

}))




const Sectors = () => {

    const classes = useStyles();

        return (
            <div className="container mb-5">
               <div className="row">
                   <div className="col-sm-2 col-6 mt-5 "><img src={"car.png"}  /></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"doctor.png"} /></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"gear.png"} /></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"hotel.png"} /></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"money.png"} /></div>
                   <div className="col-sm-2 col-6 mt-5 px-0 w-100 "><img src={"boat.png"} style={{
                       width:"120px",
                       border: "1px solid gray"
                   }}  /></div>

                   
               <div className="col-sm-2 col-6 mt-5 px-0 w-100"  ><img src={"training.png"} style={{
                       width:"120px",
                       border: "1px solid gray"
                   }}  /></div>

                   <div className="col-sm-2 col-6 mt-5 "><img src={"plane.png"} /></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"bank.png"}/></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"telecommunication.png"}/></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"shop.png"}/></div>
                   <div className="col-sm-2 col-6 mt-5 "><img src={"urban.png"} /></div>
               </div>
                
                
            </div>
        )
    
}

export default Sectors
