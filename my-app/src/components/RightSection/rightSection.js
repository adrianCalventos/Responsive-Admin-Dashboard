import React from 'react';
import '../RightSection/rightSection.css';
import Reminders from './Reminders/reminders';
import IconButton from '@material-ui/core/IconButton';
import ReactCountryFlag from "react-country-flag"
import {useTranslation} from "react-i18next";

//class RightSection extends React.Component {
const RightSection = () => {
    const [t, i18n] = useTranslation("global");

    let handleChangeLanguage = (lang) =>{
        console.log(lang)
        i18n.changeLanguage(lang);
    }
    let toggleDarkMode =() => {
        document.body.classList.toggle('dark-mode-variables');
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    };


    let showMenu = () =>{ 
        const sideMenu = document.querySelector('aside');
        sideMenu.style.display = 'block';

    }


    //render() {
      return <div class="right-section">
                <div class="nav">
                    <button id="menu-btn" onClick={showMenu}>
                    <span class="material-icons-sharp">
                        menu
                    </span>
                    </button>

                    <div class="dark-mode">
                        <span >
                            <ReactCountryFlag countryCode="US" onClick={()=>handleChangeLanguage("en")} />
                        </span>
                        <span>
                            <ReactCountryFlag countryCode="ES"  onClick={()=>handleChangeLanguage("es")}/>
                        </span>
                    </div> 
                    <div class="dark-mode"   onClick={toggleDarkMode}>
                        <span class="material-icons-sharp active">
                            light_mode
                        </span>
                        <span class="material-icons-sharp">
                            dark_mode
                        </span>
                    </div> 
                    <div class="profile">
                        <div class="info">
                            <p>Hey, <b>Reza</b></p>
                            <small class="text-muted">Admin</small>
                        </div>
                        <div class="profile-photo">
                            <img src="images/profile-1.jpg" alt="profile-1"/>
                        </div>
                    </div>                
                </div>

                {/*End of nav*/}
                <div class="user-profile">
                    <div class="logo">
                        <img src="images/logo.png"/>
                        <h2>drianndemyx</h2>
                        <p>Fullstack developer</p>
                    </div>
                </div>
                <Reminders/>
            </div>
 //   }
  }

export default RightSection;