import Banner from "./HomePageComponents/Banner"
import ContactFromHome from "./HomePageComponents/ContactFromHome"
import Introduction from "./HomePageComponents/Introduction"
import WhatIDo from "./HomePageComponents/WhatICanDo"


class HomePageTemp extends React.Component
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
                <Banner text={ text.banner } />
                <Introduction text={ text.intro } />
                <ContactFromHome text={ text.homeContact } />
                <WhatIDo text={ text.whatIdo } />
                <ContactFromHome text={ text.homeContact } />
            </>
        )
    }
}

// Can request url parameters
// https://www.sitepoint.com/get-url-parameters-with-javascript/

export default HomePageTemp