import React from "react";
import Logo from "../Logo/Logo";
import styles from './header.module.css'
import HeaderItems from "./HeaderItems/Headeritems";
function Header(){
    return(
        <div className={styles.Header}>
            <Logo/>
            <HeaderItems/>
        </div>
    )

}
export default Header;