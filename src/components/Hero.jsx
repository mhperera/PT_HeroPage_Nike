const Hero = () => {
    return (
        <section className="hero container">

            <div className="hero-content">

                <h1>Your feet deserve the best</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus eum recusandae dicta accusamus officiis vitae illo sit assumenda deleniti!</p>

                <div className="hero-button-group">
                    <button>Shop Now</button>
                    <button className="btn-ghost">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-images">
                        <img src="/images/amazon.png" alt="Amazon" />
                        <img src="/images/flipkart.png" alt="Flipkart" />
                    </div>
                </div>

            </div>

            <div className="hero-image">
                <img src="/images/hero-image.png" alt="" />
            </div>

        </section>
    )
}

export default Hero