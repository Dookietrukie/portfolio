import TypeIt from "typeit-react";

function Typewriter() {

    return (

        <TypeIt 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"
            options={{ loop: true, cursor: true }}
            speed="10"
            getBeforeInit={(instance) => {
                instance
                    .type('code!')
                    .pause(1000)
                    .delete(5)
                    .type('debug!')
                    .pause(1000)
                    .delete(6)
                    .type('develop!')
                    .pause(1000)
                    .delete(8)
                    .type('create!')
                    .pause(1000)
                    .delete(7)
                    .type('optimize!')
                    .pause(1000)
                    .delete(9)
                    .type('refactor!')
                    .pause(1000)
                    .delete(9)
                    .type('implement!')
                    .pause(1000)
                    .delete(10)
                return instance;
            }}
        />
    )

}

export default Typewriter;