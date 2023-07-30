import TypeIt from "typeit-react";

function TechnologiesTypewriter() {

    return (

        <TypeIt 
            className="bg-clip-text text-black"
            options={{ loop: true, cursor: true }}
            speed="10"
            getBeforeInit={(instance) => {
                instance
                    .type('technologies...')
                    .pause(1000)
                    .delete(15)
                    .type('programming languages...')
                    .pause(1000)
                    .delete(24)
                    .type('CSS frameworks...')
                    .pause(1000)
                    .delete(17)
                return instance;
            }}
        />
    )

}

export default TechnologiesTypewriter;