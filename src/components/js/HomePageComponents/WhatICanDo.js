import style from "../../css/homepage.module.css"

import Starrer from "./Starrer"
import Card from "./Card";

class WhatIDo extends React.Component
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
            <hr className={style.horizontalLine} />

            <div className={style.whatIDo}>
                <h1>{text.really}</h1>

                <section className={style.cardsWrapper} >
                    <Card title={text.webfe} para={text.webfeEx} />
                    <Card title={text.webbe} para={text.webbeEx} />
                    <Card title={text.gamedev} para={text.gamedevEx} />
                </section>

            </div>

            <hr className={style.horizontalLine} />
            
            <div className={style.knownTechMain}>
                <h1>{text.techIknow}</h1>
                <div className={style.knownTechContainer}>
                    <table className={style.techTable}>
                        <thead>
                            <tr>
                                <th>{text.techrlang}</th>
                                <th>{text.proficient}</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>HTML / CSS / JavaScript <br/> React </td>
                                <td><Starrer total="10" actual="9" /></td>
                            </tr>
                            <tr>
                                <td>C / C++ 17 <br/> SFML, Boost </td>
                                <td><Starrer total="10" actual="9" /></td>
                            </tr>
                            <tr>
                                <td>Python <br/> PyGame, NumPy </td>
                                <td><Starrer total="10" actual="8" /></td>
                            </tr>
                            <tr>
                                <td>Java <br/> Spring </td>
                                <td><Starrer total="10" actual="8" /></td>
                            </tr>
                            <tr>
                                <td>Lua <br/> Love2D </td>
                                <td><Starrer total="10" actual="7" /></td>
                            </tr>
                            <tr>
                                <td>JavaScript<br/>(Back end)<br/> Node JS, NextJS </td>
                                <td><Starrer total="10" actual="7" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        )
    }
}

export default WhatIDo