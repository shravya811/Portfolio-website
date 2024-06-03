import React from "react"

export default function Projects(){
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh"
        }} id="Projects">
            <h1>Projects</h1>
            <ol>
                <li>
                    Society managment system 
                    <ul>
                        <li>
                            Using Python, MySQL, Integration with excel
                        </li>                
                    </ul>
                </li>
                <li>
                    Railway Management system
                    <ul>
                        <li>
                            Using java, MySQL
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )}