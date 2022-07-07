import ReactPlayer from "react-player";
import styles from "./layout.module.css"
import React from "react";

export default function Video(){
    
    return(
        <div className={styles.video}>
            <ReactPlayer url='https://www.dropbox.com/s/zdqljzlfr0uk5bg/Transitions-Lenses-Commercial---Light-Under-Control---Meet-Yoon.mp4' volume={0.2} width="100%" controls={true} playing={false} loop={false} />
        </div>
    )
}