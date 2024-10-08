const About = () => {
    return (
        <>
            <section className="about-section">
                <h2>Om the ZOO.</h2>
                <p className="about-text-left">
                    I min app kan användaren besöka sidan "Våra djur" där alla djur listas. Djuren presenteras med information om deras matstatus: "har fått mat", "börjar bli hungrig", eller "behöver bli matad!". Visuellt representeras detta genom olika färger och tjocklekar på ramarna runt djurens kort, vilket säkerställer att statusen är tydlig även utan att se färger.
                </p>
                <p className="about-text-left">
                    Om det har gått 4 timmar eller mer sedan djuret senast åt, behöver det matas, och användaren kan gå in för att mata djuret.
                </p>
                <p className="about-text-left">
                    Om det har gått 3 timmar sedan djuret blev matad sist, börjar det bli hungrigt, och användaren kan gå in och mata det.
                </p>
                <p className="about-text-left">
                    Om det är mindre än 3 timmar sedan djuret åt, är allt i sin ordning och användaren kan fokusera på annat.
                </p>
            </section>
        </>
    );
}

export default About;
