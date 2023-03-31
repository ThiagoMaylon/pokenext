import Image from "next/image";
import style from "../styles/About.module.css"
export default function About(){
    return(
        <div className={style.about}>
            <h1>About the project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi tempore nam aut, quod cupiditate ullam consectetur temporibus accusamus doloremque ipsum quidem odio animi beatae vero modi cumque error architecto.</p>
            <Image 
                src="/images/charizard.png" 
                width="300" 
                height="300"
                alt="img charizard"
            />
        </div>
    )
}