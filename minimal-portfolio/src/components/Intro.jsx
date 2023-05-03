import React from "react";

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-3 md:mb5 font-bold">Seth Thompson</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I am a full-stack web developer that focuses on creating 
                technology that solves real world problems. All coding projects 
                are built from the ground up and designed for each specific use-case.
                <br />
                I am seeking employment at a company that values helping people solve everyday issues.
            </p>
        </div>
    )
}

export default Intro;