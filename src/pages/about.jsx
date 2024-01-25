import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-white">
            <div className="container mx-auto p-8 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold mb-4 text-center">Mission</h1>
                    <p className="text-lg mb-8 text-center">
                    misyon yazısı    
                    </p>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-5xl font-bold mb-4 text-center">Vision</h2>
                    <p className="text-lg mb-8 text-center">
                    vizyon yazısı
                    </p>
                </div>
            </div>
        </div>
    );
}



