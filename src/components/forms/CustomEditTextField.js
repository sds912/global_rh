import React, { useState } from "react";


const style = {
    with: '100%',
    height: '42px',
    borderRadius: '4px'
}


const CustomEditTextField = (props) => {
    const {type, placeholder, value, label, key} =  props.data;
    const [editing, setediting] = useState(false)


    return <div className="form-group"> 
           <label>{label}</label>
           <input
             type={type}
             placeholder={placeholder}
             className="form-control"
             defaultValue={value}
             disabled={editing}
             onChange={(e) =>{
               switch (key) {
                   case 'phone':
                       props.oldValue.telephone = e.target.value;
                       props.action(props.oldValue)
                       break;

                  
                    case 'lname':
                        props.oldValue.lastName = e.target.value;
                        props.action(props.oldValue)
                        break;

                    case 'fname':
                        props.oldValue.firstName = e.target.value;
                        props.action(props.oldValue)
                        break;

                    case 'job':
                        props.oldValue.job = e.target.value;
                        props.action(props.oldValue)
                        break;

                    case 'email':
                        props.oldValue.email = e.target.value;
                        props.action(props.oldValue)
                        break;
               
                   default:
                       break;
               }
             }}
            />
         </div>

}

export default CustomEditTextField;