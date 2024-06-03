import React from "react"

export default function Home(){
    return (
        <div>
            <table>
            <tr>
                <h1>Hello!</h1>
            </tr>
            <tr><pre>I am <b>Shreya Agrawal.</b></pre>
            <img src="https://cdn.pixabay.com/photo/2015/09/09/06/57/child-931152_640.jpg" alt="My photo" height="150"/><hr/>
            </tr>
            <tr>
            <p>This is my <i>first</i> portfolio project.</p><hr/>
            </tr>
            <tr>
                <td>
                    <p1>Here are links to my index pages:</p1><br/>
                    <a href="#AboutMe">About Me</a><br/>
                    <a href="#Education">Education</a><br/>    
                    <a href="#Projects">Projects</a><br/>
                    <a href="#Skills">Skills</a><br/>
                    <a href="#Contact">Contact Me</a>
                </td>
            </tr>
            </table>
        </div>
    )
}
