import GithubIcon from '../Icons/GithubIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import PinterestIcon from '../Icons/PinterestIcon'
import TwitterIcon from '../Icons/TwitterIcon'
import InstagramIcon from '../Icons/InstagramIcon'

import style from "../css/footer.module.css"

class FooterBar extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <footer className={style.footer}>
                <ul className={style.listInline}>
                  <li className={style.listInlineItem}>
                  <a href="https://twitter.com/KishoreCMG" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                  </li>

                  <li className={style.listInlineItem}>
                  <a href="https://www.instagram.com/_kishorecmg_/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                  </li>

                  <li className={style.listInlineItem}>
                  <a href="https://github.com/kishorecmg" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                  </li>

                  <li className={style.listInlineItem}>
                  <a href="https://pinterest.com/kishorecmg/" target="_blank" rel="noopener noreferrer"><PinterestIcon /></a>
                  </li>

                  <li className={style.listInlineItem}>
                    <a href="https://www.facebook.com/kishoreprabhu.s" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                  </li>
                </ul>
            
                <p className={style.footerText}>Designed by KishoreCMG</p>
            </footer>
        )
    }
}

export default FooterBar