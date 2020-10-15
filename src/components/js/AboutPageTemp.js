import ChatBox from "./AboutPageComponents/ChatBox"

import style from "../css/aboutpage.module.css"

class AboutPageTemp extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        let text = this.props.text

        return(
            <>
                <div id={style.banner}>
                    <h1 className={style.bannerHeader}>
                        {text.relax}
                    </h1>
                </div>

                <div className={style.aboutPageContainer}>
                    <h1>{text.neverEasy}</h1>
                    <p>
                        {text.aboutMe}
                    </p>

                    <h2>
                        {text.myBot}
                    </h2>

                    <ChatBox />

                    <h2>For the time being, Chatbot is only available in English.</h2>

                </div>
            </>
        )
    }
}

export default AboutPageTemp