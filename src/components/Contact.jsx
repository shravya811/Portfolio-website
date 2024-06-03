import React from "react"

export default function Contact(){
    return (
        <div id="Contact" 
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh"
        }}>
            <h1>Contact Me</h1>
            <form>
                Enter you Name:<br/>
                <input style={{
                    backgroundColor:"#C8A2C8"
                }} type="text" placeholder="Your name"/><br/><br/>
                Type your Message here:<br/>
                <textarea style={{
                    backgroundColor:"#C8A2C8"
                }}
                name="message" id="101" placeholder="Your message" rows="10" column="15"></textarea>
            </form>
            <pre>
                Contact me: 9990572320 |
                Email: shreyag.agrawal@gmail.com |
                Linkedin: <a href="https://www.linkedin.com/in/shreya-agrawal-332001252/" target="_main">Linkedin</a>
            </pre>
        </div>
    )
}
