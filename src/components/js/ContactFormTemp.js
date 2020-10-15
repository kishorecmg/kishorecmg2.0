import style from "../../components/css/contactpage.module.css"
import { sendContactMail } from  "../js/mailHelper"

class ContactFormTemp extends React.Component
{
    state = {
        formButtonDisabled: false,
        name: "",
        mail: "",
        formContent: "",
        isMailSent: "",
        bodyTextCount: 0
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onMailChange = (event) => {
        this.setState({ mail: event.target.value })
    }

    onFormContentChange = (event) => {
        this.setState({ 
            formContent: event.target.value,
            bodyTextCount: String(this.state.formContent).length
        })
    }

    submitContactForm = async (event) => {
        event.preventDefault()

        this.setState({ 
            isMailSent: "Please wait while the mail is being sent",
            formButtonDisabled: true
        })

        const recipientMail = "kishorecmg@gmail.com"
        const { name, mail, formContent } = this.state

        const res = await sendContactMail(recipientMail, name, mail, formContent)
        if (res.status < 300) 
        {
            this.setState({
                formButtonDisabled: true,
                isMailSent: "Thanks for your message",
                name: "",
                mail: "",
                formContent: ""
            })

        } 
        else if(res.status > 500)
        {
            this.setState({ isMailSent: `Internal Server Error. Error Code: ${res.status}` })
        }
        else 
        {
            this.setState({ 
                isMailSent: `Please fill out all the fields. Error Code: ${res.status}`,
                formButtonDisabled: false
            })
        }
    }

    render() 
    {    
        let text = this.props.text

        const { formButtonDisabled, name, mail, formContent } = this.state

        const buttonDisabled = formButtonDisabled? style.disabled : ""

        return (
            <>
            <div id={style.banner}>
                    <h1 className={style.bannerHeader}>
                        {text.contactDirect}
                    </h1>
            </div>

            <div className={style.contactParent} >
                <div className={style.contactHeader}>
                    <h3>{text.appreciate}</h3>                    
                </div>

                <div className={style.form}>
                    <p type={text.name}>
                        <input 
                            type="text"
                            placeholder={text.name}
                            value={name}
                            name="fname"
                            onChange={this.onNameChange}  />
                    </p>

                    <p type={text.email}>
                        <input type="email"
                            placeholder={text.email}
                            value={mail}
                            name="email"
                            onChange={this.onMailChange}  />
                    </p>

                    <p type={`${text.message} : ${1024 - this.state.bodyTextCount} characters remaining`}>
                        <textarea 
                            placeholder={text.message} 
                            maxLength = "1024"
                            name="text"
                            value={formContent}
                            onChange={this.onFormContentChange} />
                    </p>

                    <button
                        className={buttonDisabled}
                        type="submit"
                        onClick={this.submitContactForm}
                        disabled={formButtonDisabled}>
                        {text.send}
                        </button>
                    
                    <h3 className={style.contactResult} >{this.state.isMailSent}</h3>
                </div>

                <div className={style.contactFooter}>
                    <h3>{text.youShare}</h3>                    
                </div>


            </div>
            </>
        )
    }
}

// Nice explanation
// https://stadtteilliebe.de/blog/serverless-contact-form

export default ContactFormTemp