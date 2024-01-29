import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-white">
            <div className="container mx-auto p-8 flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <h1 className="text-5xl font-bold mb-4 text-center">Our Team</h1>
                    <p className="text-lg text-left">
                    As the KCLMUN'24 team, we are a Model United Nations organization founded in 2023, where the most competent MUN participants from Kocaeli and surrounding provinces come together to promote our city in the best possible way. 
                    </p>
                </div>

                <div className="md:w-1/3">
                    <h2 className="text-5xl font-bold mb-4 text-center">Our Mission</h2>
                    <p className="text-lg text-left"><li>
                    Social Skills: 
                    To provide teens with skills such as establishing social relationships, improving language skills, awareness of responsibility, self-confidence, entrepreneurship, crisis management, public speaking, and expressing their own opinion.
                    </li></p>
                    <p className="text-lg text-left"><li>
                    World Views
                    To raise awareness of world problems, to expand diplomatic and political knowledge, to instill awareness of being a world citizen.
                    </li></p>
                    <p className="text-lg text-left"><li>
                    A Brand-new Experience
                    To increase the prevalence and promote this social event, which is felt to be missing in our city but is loved by our teens, with a large-scale event in Kocaeli.
                    </li></p>
                </div>
                <div className="md:w-1/3">
                    <h2 className="text-5xl font-bold mb-4 text-center">Our Vision</h2>
                    <p className="text-lg text-left"><li>
                    To be a pioneer for a youth that is responsible, conscious and aware of environmental problems. 
                    </li></p>
                    <p className="text-lg text-left"><li>
                    Developing young people's analysis and solution skills to international, political and diplomatic problems
                    </li></p>
                    <p className="text-lg text-left"><li>
                    Ensuring that the new generation gets used to academic activities and environments
                    </li></p>
                </div>
            </div>
        </div>
    );
}



