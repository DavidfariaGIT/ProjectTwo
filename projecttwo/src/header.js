import React from 'react';

function Header() {
    return (
        <header className="stickyHeader">

            <section className="upper_link">
                <div className="upper_box">
                    <div className="upperLink_text">
                        <a href="#"><strong>Issue No.16</strong> Now available to order.</a>
                    </div>
                </div>
            </section>

            <section className="header_container">
                <div>
                    <button className="headerButtonLeft">Subscribe</button>
                    <img className="eyeglass" src="IMAGES/eyeglass.png" alt="Eyeglass" />
                </div>
                <div>
                    <img className="logo" src="IMAGES/social.png" alt="Logo" />
                </div>
                <div>
                    <button className="headerButtonRight">Cart</button>
                </div>
            </section>

            <nav>
                <ul className="headerList">
                    <li className="listItems">
                        <a><p>PRINT PUBLICATION</p></a>
                    </li>
                    <li className="listItems">
                        <a><p>ARTICLES</p></a>
                    </li>
                    <li className="listItems">
                        <a><p>VIDEOS</p></a>
                    </li>
                    <li className="listItems">
                        <a><p>THE LOCAL MARKETPLACE</p></a>
                    </li>
                    <li className="listItems">
                        <a><p>PROFILES</p></a>
                    </li>
                    <li className="listItems">
                        <a><p>ADVERTISE</p></a>
                    </li>
                    <li className="listItems">
                        <a><p>ABOUT</p></a>
                    </li>
                    <li className="listItems">
                        <a><p>THE EMERGING DESIGNER AWARDS</p></a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;
