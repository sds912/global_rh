import React from 'react'
import DraftsIcon from '@material-ui/icons/Drafts';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { isMobile } from 'react-device-detect';


const styles = {
    root:{
     "position": "relative",
     "height": "240px"
    },
    title: {
        fontFamily: "Helvetica Neue",
        fontSize: "22px",
        fontWeight: "bold",
    },
    icon:{
        fontSize: "76px"
    }

}

const MainInfoSection = (props) =>  {
    const {key, icon, title, description} = props.info;
    return (
        <div style={styles.root}  key={key} className='text-center'>
            <div className='text-center' style={ isMobile ?{} :{'position': 'absolute', 'left': 0, 'top': 0}}>
               {icon == 'draft' ? <DraftsIcon  style={{fontSize: '76px'}}/> : ''}
               {icon == 'alarm' ? <AccessAlarmIcon  style={{fontSize: "76px"}}/> : ''}
               {icon == 'sharp' ? <SearchSharpIcon  style={{fontSize: "76px"}}/> : ''}
               <h5 style={styles.title}>{title}</h5>
            </div>
           <p className={ isMobile ? 'text-center':'text-left'} style={ isMobile ?{}: {'position': 'absolute','left': 0, 'top': 120 }}>
             {description}
           </p>
        </div>
    )
}

export default MainInfoSection;
