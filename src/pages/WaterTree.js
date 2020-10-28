import React from "react";

// Scrolling
import { Link, Element, Events, animateScroll, scroller } from "react-scroll";

// Assets
import logo from "../assets/images/watertreelogo.png";

// Sections
import Title from "../sections/Title";
import ProductSection from "../sections/ProductSection";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

// Styling
import "./WaterTree.scss";

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navStatus: "home-nav",
            sections: [
                {
                    name: "title",
                    section: <Title />,
                },
                {
                    name: "products",
                    section: <ProductSection />,
                },
                {
                    name: "about",
                    section: <About />,
                },
                {
                    name: "contact",
                    section: <Contact />,
                },
            ],
        };
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.fireOnScroll, true);
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
        });
    }

    fireOnScroll = () => {
        let { navStatus } = this.state;
        let winHeight = window.innerHeight;

        let body = document.body;
        let html = document.documentElement;
        let docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );

        let value = document.documentElement.scrollTop,
            max,
            // eslint-disable-next-line
            percent;

        max = docHeight - winHeight;
        percent = (value / max) * 100;

        if (navStatus === "home-nav" && value > 150) {
            this.setState({
                navStatus: "nav",
            });
        } else if (value <= 150) {
            this.setState({
                navStatus: "home-nav",
            });
        }
    };

    scrollToTop() {
        animateScroll.scrollToTop();
    }

    scrollTo(offset) {
        scroller.scrollTo("scroll-to-element", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: offset,
        });
    }

    scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
            Events.scrollEvent.register("end", () => {
                resolve();
                Events.scrollEvent.remove("end");
            });

            scroller.scrollTo("scroll-container", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
        });

        goToContainer.then(() =>
            scroller.scrollTo("scroll-container-second-element", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                containerId: "scroll-container",
            })
        );
    }

    setNavBarLinks(link) {
        switch (link) {
            case "title":
                return "HOME";
            case "products":
                return "WATER & PRODUCTS";
            case "about":
                return "ABOUT US";
            case "contact":
                return "FIND US";
            default:
                return;
        }
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    render() {
        const { sections, navStatus } = this.state;

        return (
            <div>
                {navStatus === "nav" ? (
                    <nav className="navbar" onClick={this.scrollToTop}>
                        <img className="navbar__logo" src={logo} alt="logo" />
                        <div className="navbar__links">
                            {sections.map((e, i) => {
                                return (
                                    <Link
                                        key={i}
                                        className="navbar__links--link"
                                        to={e.name}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        {this.setNavBarLinks(e.name)}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="navbar__social-media">
                            <a
                                href="https://www.instagram.com/watertreeusa/"
                                className="navbar__social-media--link"
                            >
                                <i className="navbar__social-media--app fab fa-instagram blue fa-lg" />
                            </a>
                            <a
                                href="https://www.facebook.com/watertreeusa/"
                                className="navbar__social-media--link"
                            >
                                <i className="navbar__social-media--app fab fa-facebook-square blue fa-lg" />
                            </a>
                        </div>
                    </nav>
                ) : null}

                <Element name="title" id="title">
                    <Title
                        navStatus={navStatus}
                        sections={sections}
                        setNavBarLinks={this.setNavBarLinks}
                    />
                </Element>

                <Element id="about" name="about">
                    <About />
                </Element>

                <Element id="products" name="products">
                    <ProductSection />
                </Element>

                <Element id="contact" name="contact">
                    <Contact />
                </Element>

                {navStatus === "nav" ? <Footer /> : null}
            </div>
        );
    }
}
