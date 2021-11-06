import React from "react";

import styles from "./DivCard.module.css"


const DivCard = (props) => {
    return (
        <div className={styles.card}>
            {props.childrem}
        </div>
    );
};

export default DivCard;