import React from 'react';

const About = () => {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">About NewsVerse</h2>
                <p className="lead text-muted">
                    Your one-stop destination for real-time news across the globe.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <p className="fs-5 text-secondary">
                        <strong>NewsVerse</strong> is a dynamic web platform that brings you the latest headlines from
                        various categories including politics, technology, business, sports, entertainment, and health.
                        Stay informed with live updates powered by trusted news APIs — all in one place.
                    </p>

                    <p className="fs-5 text-secondary">
                        Designed with a clean interface and responsive layout, NewsVerse ensures a smooth reading experience
                        whether you're on desktop or mobile. Browse news by category, stay updated in real time, and never
                        miss a headline that matters to you.
                    </p>

                    <p className="fs-5 text-secondary">
                        Built with modern web technologies to deliver speed, clarity, and simplicity — because good news
                        should reach you fast.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
