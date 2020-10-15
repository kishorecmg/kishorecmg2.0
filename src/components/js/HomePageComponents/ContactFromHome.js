import Link from 'next/link'

import style from "../../css/homepage.module.css"

class ContactFromHome extends React.Component
{
    constructor(props)
    {
        super(props)

        let temp

        if(process.browser)
        {
            temp = String(window.location.pathname)
        }

        this.state = {
            currentLanguage: temp !== undefined? temp.slice(1,3) : 'en'
        }
    }

    render()
    {
        let text = this.props.text

        return(
            <>
            <hr className={style.horizontalLine} />
            <div className={style.contactFromHome}>
                <h1>{text.contactEasy}{" "}{" "}
                <Link href={`/${this.state.currentLanguage}/contact`}><a>{text.click}</a></Link></h1>
            </div>
            </>
        )
    }
}


export default ContactFromHome