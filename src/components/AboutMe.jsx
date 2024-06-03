import React from "react"

export default function AboutMe(){
    return (
        <div id="AboutMe"
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h1>About Me</h1>
            <span style={{
                width:"60%",
                textAlign:"center"
            }}>
                Hi! I am pursuing B.tech in EEE(Electrical and electronics) 
                from Vellore Institute of Technology. Graduating in '26. 
                I am very passionate about growing and learning new things.
                My world revolves around problem-solving, 
                with a keen focus on web development and competitive coding. 
                Beyond the tech realm, I find joy in exploring the 
                elegance of mathematics and am always eager to learn new things. Additionally, 
                I have a flair for designing applications. Excited about the dynamic 
                field of technology, I am committed to continuous learning in my sophomore year.
            </span>
        </div>
    )
}
