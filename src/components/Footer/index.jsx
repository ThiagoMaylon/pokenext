import style from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <p>
                <span>PokeNext</span> &copy; 2022
            </p>
        </footer>
    )
}