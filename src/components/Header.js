import React from "react";
import FacePic from  '../assets/FacePic.JPG';
import Typewriter from "./Typewriter";

function Header() {
    
    return(

        <header className="h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center">
            <div className="container mx-auto px-4 md:flex items-center justify-between">

                <div className="text-center md:text-left md:w-1/2 text-white">
                    <h1 className="text-5xl font-bold tracking-tight">
                        Hi, I'm Cris and I like to&nbsp; <br />
                        <Typewriter />
                    </h1>
                    <p className="text-xl font-medium mt-2">
                        MERN Full Stack Web Developer
                    </p>
                </div>

                <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8 flex justify-center">
                    <img
                        src={FacePic}
                        alt="Cristian Palao"
                        className="rounded-full md:w-96 md:h-96 w-48 h-48 mx-auto md:mx-0"
                    />
                </div>
            </div>
        </header>

    );

}

export default Header;