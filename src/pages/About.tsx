import '../styles/about.scss';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-photo">
                    <img src="/assets/profile.jpg" alt="About Me" /> {/* Update with your photo path */}
                </div>
                <div className="about-description">
                    <h1>About Me</h1>
                    <p>
                        Hello! I'm Jennifer, a passionate photographer with a love for nature and travel. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea modi debitis aspernatur inventore eos corrupti vel officiis ex? Aliquam, nam dignissimos. Ducimus doloribus vitae quae dolores error officia repellat commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos architecto quibusdam amet, eaque tempora, nisi numquam magni cupiditate impedit ullam delectus magnam sequi reprehenderit ipsa quaerat tenetur iure tempore sint?</p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque iure, libero voluptate quo et odit aut laudantium nihil earum adipisci aperiam, soluta distinctio dolorem eum ex! Eius, hic ullam!                        </p>
                </div>
            </div>
        </section>
    )
}

export default About;