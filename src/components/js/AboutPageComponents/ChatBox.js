import TextIchi from "./TextIchi"

import style from "../../css/aboutpage.module.css"

class ChatBox extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            chats: [
                <TextIchi type="answer" message="Chat goes like this." key="1" /> ,
                <TextIchi type="answer" message="Click an option below to start chatting." key="2"  /> 
            ],
            
            buttonBucket: [
                <button onClick={() => this.addAChat(0)} key="0" >Hello!</button>,
                // ENtry level 
                [
                    <button onClick={() => this.addAChat(11)} key="11" >I want to know about you!</button>,
                    <button onClick={() => this.addAChat(12)} key="12" >I want to know about this webpage!</button>,
                    <button onClick={() => this.addAChat(13)} key="13" >I want to know something else!</button>
                ],
                // about me
                [
                    <button onClick={() => this.addAChat(21)} key="21" >Tell me about yourself.</button>,
                    <button onClick={() => this.addAChat(22)} key="22" >Proficient languages?</button>,
                    <button onClick={() => this.addAChat(23)} key="23" >Your skillsets?</button>,
                    <button onClick={() => this.addAChat(24)} key="24" >Your strengths?</button>,
                    <button onClick={() => this.addAChat(25)} key="25" >Your possible weaknesses?</button>,
                    <button onClick={() => this.addAChat(26)} key="26" >Your hobbies?</button>,
                    <button onClick={() => this.addAChat(27)} key="27" >Do you have any experience?</button>,
                    <button onClick={() => this.addAChat(28)} key="28" >I want to know more about you.</button>,
                    <button onClick={() => this.addAChat(99)} key="991" >Go back.</button>
                ],
                // about this page
                [
                    <button onClick={() => this.addAChat(31)} key="31" >Website framework?</button>,
                    <button onClick={() => this.addAChat(32)} key="32" >Time frame to complete this webpage?</button>,
                    <button onClick={() => this.addAChat(33)} key="33" >Can I have the source code?</button>,
                    <button onClick={() => this.addAChat(34)} key="34" >Dependencies?</button>,
                    <button onClick={() => this.addAChat(35)} key="35" >Attributions?</button>,
                    <button onClick={() => this.addAChat(99)} key="992" >Go back.</button>
                ],
                // trivia
                [
                    <button onClick={() => this.addAChat(41)} key="41" >A random fact.</button>,
                    <button onClick={() => this.addAChat(42)} key="42" >What is the time now?</button>,
                    <button onClick={() => this.addAChat(99)} key="993" >Go back.</button>
                ],
            ],

            buttons: [],

            // Random trivia
            randomTrivia: [
                "The 2011 Kumbh Mela was the largest gathering of people with over 75 million pilgrims. The gathering was so huge that the crowd was visible from space.",
                "Shampoo was invented in India, not the commercial liquid ones but the method by use of herbs. The word 'shampoo' itself has been derived from the Sanskrit word champu, which means to massage.",
                "The word “PEZ” comes from the German word for peppermint – PfeffErminZ.",
                "The hashtag symbol is technically called an octothorpe.",
                "The father of India's missile programme had visited Switzerland back in 2006. Upon his arrival, Switzerland declared May 26th as Science Day.",
                "There is a Boring, Oregon and a Dull, Scotland. They have been sister cities since 2012.",
                "Be it because of religious reasons or personal choices or both, around 20-40% of Indians are vegetarians, making it the largest vegetarian-friendly country in the world.",
                "The term “soccer” does not originate in America. The word is from Britain, where it was derived from a short form of “Association Football.”",
                "Rabindranath Tagore is credited not only for writing the Indian national anthem, Jana Gana Mana, but the Bangladeshi national anthem, Amar Sonar Bangla, as well. He was also offered knighthood by the British but refused the honour after the Jalianwala Bagh massacre.",
                "The Sahara is the largest non-polar desert in the world. It is comparable in size to China or the United States.",
                "It’s been said that nearly 3% of the ice in Antarctic glaciers is penguin urine.",
                "The first tiger shark to hatch inside of its mother’s womb eats all the other embryos of its siblings. Even scientists admit that this is an unusual mode of survival.",
                "The Kola Superdeep Borehole in Russia is the world’s deepest hole. It is 7.5 miles deep, but interestingly, only 9 inches wide.",
                "King Henry VIII had a “Groom of the Stool”, whose job was to monitor and assist in the King’s bowel motions. The role remained in existence until King Edward VII abolished it in 1901.",
                "With an average height of about 13,000 feet and stretching for 4,300 miles, the Andes Mountains are the longest continental mountain range in the world.",
                "High heeled shoes were originally created for men.",
                "The word “orange” was first used to describe the fruit, not the color.",
                "Up to 12 million Dum Dums are made every single day.",
                "Initially, diamonds were only found in the alluvial deposits in Guntur and Krishna District of the Krishna River Delta. Until diamonds were found in Brazil during the 18th century, India led the world in diamond production.",
                "Whether measuring by size (0.17 sq mi) or population (1,000), Vatican City is the smallest country in the world.",
                "Indians made significant contributions to calculus, trigonometry, and algebra. The decimal system was invented in India in 100 B.C. The concept of zero as a number is also attributed to India.",
                "Baby porcupines are called “porcupettes”.",
                "Mount Rushmore almost featured the heads of famous American West heroes, like Buffalo Bill Cody, but the lead sculptor argued that the subjects should be more recognizable.",
                "At the 1908 Olympics, the Russians showed up 12 days late because they were using the Julian calendar instead of the Gregorian calendar.",
                "The Amazon Forest is the largest natural rainforest in the world. At 2.7 million square miles, it covers 40% of South America.",
                "China owns nearly all of the pandas in the world, even the ones you see at zoos. They rent them out for about even the ones you see at zoos. They rent them out for about $1 million a year",
                "Beer is one of the oldest recorded recipes in the world, with documentations of the beverage dating back to around 5,000 BC and the ancient Egyptians.",
                "Lasting only 38 minutes, the Anglo-Zanzibar War of 1896 is generally considered to be the shortest war in history.",
                "Bubble Wrap was originally intended to be used as 3D wallpaper.",
                "Due to a discrepancy over border recognition between Egypt and Sudan, there is a region in Africa called Bir Tawil that belongs to no country.",
                "The earliest cotton in the world was spun and woven in India. Roman emperors would wear delicate cotton from India that they would call “woven winds.”",
                "Valles Marineris, a canyon on Mars, would stretch from from Los Angeles to the Atlantic coast if it were on Earth.",
                "With 150,000 post offices, India has the largest postal network in the world. However, it is not unusual for a letter to take two weeks to travel just 30 miles.",
                "Every major world religion is represented in India. Additionally, Hinduism, Buddhism, Jainism, and Sikhism all originated in India.",
                "The Caspian Sea is the largest enclosed inland body of water on Earth.",
                "Most historians agree that the first recorded account of plastic surgery is found in ancient Indian Sanskrit texts.",
                "Geologic activity around the Ring of Fire is responsible for roughly 90% of all earthquakes worldwide.",
                "During World War II, Queen Elizabeth II, then an 18-year-old princess, trained in London as a mechanic and military truck driver.",
                "The heart of a shrimp is located in its head.",
                "Canada has more lakes than anywhere in the world. 9% of the country is covered in fresh water.",
                "President Richard Nixon was at Disney World when he infamously proclaimed, “I am not a crook.”",
                "A group of flamingos is called a “flamboyance”.",
                "The World Wrestling Federation (WWF) had to change their name to World Wrestling Entertainment (WWE) because of legal action taken by the World Wildlife Fund (WWF).",
                "India has the world’s third largest road network at 1.9 million miles. It also has the world’s second largest rail network, which is the world’s largest civilian employer with 16 million workers.",
                "There are more than 7,000 different Caribbean islands, but only about 2% of them are inhabited.",
                "It’s been estimated that a new baby can rob parents of anywhere between 400-750 hours of sleep in the first year.",
                "Whatcom County in the state of Washington unanimously passed a resolution declaring the region a Sasquatch Protection and Refuge Area.",
                "Titan, Saturn’s largest moon, is the only moon known to have a fully developed atmosphere. In fact, it is about 50% denser than Earth’s.",
                "Since 1945, all British tanks have come equipped with tea making facilities.",
                "The greater Tokyo metropolitan area is made up of 3 prefectures and includes the capital of Japan, Tokyo, and has an estimated population of 38.14 million people making it the most populated megacity in the world.",
                "69% of Japan is Covered in Forest",
                "You actually can see Russia from Alaska. Given the correct weather conditions in the Bering Sea, you can see the island of Big Diomede, Russia, from the smaller island of Little Diomede, Alaska.",
                "Many lipsticks contain fish scales.",
                "After three-letter airport codes became standard, airports that had previously been using only two letters simply added an X.",
                "At 3,212 feet high, Angel Falls in Venezuela is the highest uninterrupted waterfall in the world.",
                "Prairie dogs say “hello” by kissing.",
                "In Osaka, the Hanshin Expressway goes directly through the Gate Tower Building’s 5th, 6th, and 7th floors. In reality, the workers in the building don’t really notice as the walls and floors of the building are soundproof and the highway doesn’t actually touch the building.",
                "Haiku poetry is the shortest form of poetry in the world and was first developed in Japan. Its origins can be traced back to the 9th century. A Haiku is made up of 3 short lines that total 17 syllables. The first line of the Haiku is 5 syllables, the second is 7 syllables and the 3rd line is also 5 syllables. It’s also considered more than just poetry and a way of looking at the world.",
                "Because of the massive influence that European culture was having on Japan, since first meeting them in 1543, the Shogun of Japan at that time Tokugawa Lemitsu closed off Japan to all foreigners in 1635. During this time, anyone who was seen using European goods would be punished. This law was called the Sakoku Edict of 1635 and lasted over 200 years.",
                "India and China are the only countries in the world with populations above 1 billion people.",
                "At just 135 words, George Washington’s second inaugural address remains the shortest ever delivered.",
                "The medical term for a gurgling stomach is “borborygmus”.",
                "Despite their names, Iceland isn’t covered in ice and Greenland isn’t very green.",
                "A single cow can make roughly 200,000 glasses of milk in a lifetime.",
                "Roughly 30% of the Earth’s remaining mineral resources can be found in Africa.",
                "The largest sand castle in the world was built in Germany and was over 54 feet high. It took 168 trucks over a week to deliver enough sand.",
                "Earth is not a perfect sphere. Our planet is squashed at its poles and swollen at the equator.",
                "Starting around 2003, pets became more and more popular in Japan and by the year 2009, there were close to 6 million more cats and dogs than children in Japan.",
                "A snail can sleep for three years.",
                "Earth’s highest point on land (Mt. Everest), and lowest (Dead Sea), are both found in Asia.",
                "The Cookie Monster has a real name. It’s Sid.",
                "Trains in Japan are so punctual that it’s scary! At the same time, it makes me wonder in awe how they do it because there are so many different train lines that run throughout the country on a given day. In fact, in 2017, the Tsukuba Express line between Tokyo and Tsukuba made global headlines when the management of the train line apologized publicly for leaving the station 20 seconds early.",
                "Kongo Gumi Co. Ltd, an Osaka founded and based construction company that specialized in building Buddhist temples was actually the oldest running company with over 1,400 years of history before it was purchased and absorbed by the Takamatsu Construction Group in 2006.",
                "After he retired, Dwight D. Eisenhower’s secret service code name became “Scorecard” because of his affinity for golf.  ",
                "Indonesia is made up of over 17,000 islands.",
                "Stretching over 1,600 miles, the Great Barrier Reef is the world’s biggest single structure made by living organisms.",
                "In 2009, Scottish scientists searching for the Loch Ness Monster found 100,000 golf balls instead.",
                "Saint Patrick never banished snakes from Ireland. Scientist believe the island has been snake-free since the Ice Age.",
                "When spliced together, there are 26 minutes of quiet staring in the Twilight film series.",
                "There is no spot in Central America more than 125 miles from the ocean.",
                "There’s a village in Norway called Hell, and it freezes over every winter.",
                "Koalas and humans have remarkably similar fingerprints.",
                "S.O.S. does not stand for anything. It was created as a universal distress signal because it is a simple, unmistakable message when sent via Morse Code.",
                "Pluto’s average distance from the Sun is 3,670,050,000 miles.",
                "At 4,101 feet, Mt. Thor on Baffin Island, Canada, has Earth’s greatest sheer vertical drop.",
                "With 94% identical DNA, Chimpanzees are the closest living relatives to humans.",
                "Tootsie Rolls were used as part of the rations for World War II soldiers.",
                "The French territory of Louisiana was purchased by the U.S. in 1803 for roughly four cents per acre.",
                "A pluot is a hybrid between a plum and a apricot.",
                "There are seven different villages in Denmark, Sweden, and Norway with the name Å (it translates to “river” in Scandinavian languages).",
                "Aulophobia is an exaggerated or irrational fear of flutes.",
                "In the last row of the U.S. Senate Chamber, there is a desk that is always stocked with candy.",
                "In 1986, one year after Steve Jobs resigned as chairman, Apple launched a clothing line called “The Apple Collection”.",
                "An Egyptian Pharaoh named King Pepy II commonly smothered his servants in honey to keep flies away from him.",
                "With a population of 37,308 and an area less than 1 square mile, Monaco is the most densely populated nation in the world.",
                "It takes light from the Sun 8 minutes to reach Earth.",
                "Elephants can’t jump.",
                "The population is decreasing in Japan and Korea.",
                "The suffix -stan is Persian for “place of” or “country”, which explains why so many countries end with it.",
                "The Atacama Desert is the driest non-polar region on Earth. Some weather stations in the Atacama have never received rain.",
                "The U.S. Supreme Court has previously ruled that tomatoes are vegetables."
            ]
        }

        this.state.buttons = this.state.buttonBucket[0]

    }

    returnARandomTrivia()
    {
        let random = Math.floor((Math.random() * 101) + 1)

        return (this.state.randomTrivia[random])
    }

    
    setStateAfterWhile(time, option)
    {
        let loading = <img src="/loading.gif" className={style.loadingImage} alt="loading" />

        this.setState( { buttons: loading } )
        
        setTimeout(() => {
            this.setState( {buttons: this.state.buttonBucket[option]} )
        }, time);
    }

    
    setStateChat(time, chat, i)
    {
        setTimeout(() => {
            this.setState( {chats: [...this.state.chats, chat]} )
        }, time * i);
    }

    addAChat(argument)
    {        
        let textArg, send = []

        let keyer = this.state.chats.length + 1

        switch (argument) 
        {
            // welcome
            case 0:
                textArg = "Hello"
                send = ["Well, Hello there, my fellow traveller!", "How can I be of service?"]
                this.setStateAfterWhile(750, 1)
                break;

            // entry level
            case 11:
                textArg = "I want to know about you!"
                send = ["Really? That's great!", "What do you want to know?"]
                this.setStateAfterWhile(750, 2)
                break;
            case 12:
                textArg = "I want to know about this webpage!"
                send = ["Going to the technical side, huh?", "What do you want to know?"]
                this.setStateAfterWhile(750, 3)
                break;
            case 13:
                textArg = "I want to know something else"
                send = ["Trivia?", "What do you want to know?"]
                this.setStateAfterWhile(750, 4)
                break;

            // about me
            case 21:
                textArg = "Tell me about yourself."
                send = ["I am Kishore Prabhu. Mechanical Engineer by education, Full-Stack Developer by profession (in near future), and a Game Developer by ambition", "And always a language lover.", "I am from Erode, Tamil Nadu, India.", "I know four languages."]
                break;
            case 22:
                textArg = "What are the languages you are proficient in?"
                send = ["I love learning new languages!", "In the order of decreasing proficieny", "Tamil, English, Japanese, Chinese"]
                break;
            case 23:
                textArg = "What are your skill sets?"
                send = ["Communication", "Team work", "Problem solving", "Thinking out of the box."]
                break;
            case 24:
                textArg = "What are your strengths?"
                send = ["I can learn anything very quickly", "Though I can do almost anything by myself, I won't hesitate asking help from others.", "Confidence", "I won't panic even at the toughest times."]
                break;
            case 25:
                textArg = "What are your possible weaknesses?"
                send = ["Extreme expectation in perfection that sometimes even I myself cannot achieve", "Lazy and very forgetful", "No reading habit", "I dislike outdoor activities", "Mostly patient, but if something feels wrong, I won't hesitate to drop something that I have been doing for a long time"]
                break;
            case 26:
                textArg = "What are your Hobbies?"
                send = ["Playing PC games is my most favourite hobby", "Learning something new is my second.", "I really like A.R.Rahman's music.", <a href="https://www.youtube.com/watch?v=bt4-FwVe1Fk" target="_blank" >This one is my most favourite</a>]
                break;
            case 27:
                textArg = "Do you have any experience?"
                send = ["No, not yet", "I am a fresher straight out of the college."]
                break;
            case 28:
                textArg = "How to contact you."
                send = ["That's really nice!", "Click 'Contact' in the menu and you could send a mail directly to me."]
                break;

            // about webpage
            case 31:
                textArg = "On what framework this website was built on?"
                send = ["Glad you asked!", "This website is built using a framework of a framework of JavaScript.", "Next JS is the framework."]
                break;
            case 32:
                textArg = "How much time did you take to make this website?"
                send = ["After so much procrastination, It took around 15 days.", "Or 50 hours"]
                break;
            case 33:
                textArg = "Can I have the source code of this website?"
                send = ["Of course!", "It's a great privilege to see someone using my code.", <a href="https://github.com/kishorecmg/kishorecmg2.0" target="_blank" >Click Here.</a>]
                break;
            case 34:
                textArg = "What are the dependencies used by this website?"
                send = ["There are several of them.", "NodeMailer", "Axios", "create-next-app"]
                break;
            case 35:
                textArg = "Can you attribute the sources?"
                send = [<div>User, Tumbleweed, Bot icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> ,<div>Random facts took from <a href="https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/">here.</a></div>, <div>Colour palletes from <a href="https://coolors.co">here.</a></div>, ]
                break;
            
            // something else
            case 41:
                textArg = "Can you tell me a random fact?"
                send = ["Sure.", "Do you know?", <span>{this.returnARandomTrivia()}</span>, "Amazing, no?"]
                break;
            case 42:
                textArg = "What is the time now?"
                send = [<span>{new Date().toString()}</span>]
                break;
            
            // go back to entry level
            case 99:
                textArg = "Go back."
                send = ["OK"]
                this.setStateAfterWhile(750, 1)
                break;

            default:
                break;
        }
      
        let sh = <TextIchi type = "sent" message = {textArg} key={keyer} />

        let qh = send.map((ech) => {
            keyer ++
            return(<TextIchi type="answer" message={ech} key={keyer} />)
        })

        this.setState({
            chats: [...this.state.chats, sh]
        })

        let i = 0
        for(i = 0; i < qh.length; i++)
        {
            this.setStateChat(1500, qh[i], i)
        }

    }

    render()
    {
        return(
            <div className={style.window}>
                <div className={style.chatboxBar}>
                     <h3>Chat companion - CMG Jr.</h3> 
                     <div>
                        <span className={style.dot} style={{"backgroundColor": "red"}} />
                        <span className={style.dot} style={{"backgroundColor": "yellow"}} />
                        <span className={style.dot} style={{"backgroundColor": "green"}} />
                     </div>
                </div>
                <div className={style.chatbox}>
                    {this.state.chats}
                </div>

                <div className={style.chatboxFooter}>
                    <div>
                        {this.state.buttons}
                    </div>
                    <h3>This one is a genius, isn't it?</h3>
                </div>
            </div>
        )
    }
}

export default ChatBox