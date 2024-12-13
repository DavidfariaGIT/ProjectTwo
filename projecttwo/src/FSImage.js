import React from 'react';

function FSimage(props) {
    return (
        
        <section className="FSimageContainer">
            <p className="FSpara">A DESIGNER'S GUIDE TO SOFAS: ALEXANDRA DONOHOE<br />CHURCH OF DECUS INTERIORS</p>
            <img className="FSimage" src="IMAGES/Yukari-House-by-Tanev-Muir-Architects-Video-Feature-The-Local-Project-Image-4.jpg" alt="Feature image" />
            <div className="FSbutton_wrapper">
                <button className="FSbutton">WATCH VIDEO</button>
            </div>

            <div className="gallery">
                <div className="item">
                    <img className="gal_img" src="IMAGES/Shor-House-by-Measured-Architecture-Issue-16-Feature-The-Local-Project-Image-41.jpg" alt="Shor House by Measured Architecture" />
                    <h3>Shor House by Measured Architecture</h3>
                    <p>Thoughtfully salvaging the materials and history of its island site, this dynamic family home beautifully interweaves shared and personal narratives with sustainable, contemporary design.</p>
                </div>
                <div className="item">
                    <img className="gal_img" src="IMAGES/Melbourne-Place-by-Kennedy-Nolan-Issue-16-Feature-The-Local-Project-Image-10.jpg" alt="Melbourne Place by Kennedy Nolan" />
                    <h3>Melbourne Place by Kennedy Nolan</h3>
                    <p>Melbourne Place, the latest luxury boutique stay in the heart of Australia’s arguably most creative and cultural mecca is a declaration of intention, purpose, and identity.</p>
                </div>
                <div className="item">
                    <img className="gal_img" src="IMAGES/Spring-Street-Apartment-by-Lovell-Burton-Issue-16-Feature-The-Local-Project-Image-22.jpg" alt="Spring Street Apartment by Lovell Burton" />
                    <h3>Spring Street Apartment by Lovell Burton</h3>
                    <p>The renovation of a home within one of Melbourne’s first apartment towers reimagines its rich modernist history and striking aspect, offering both urban immersion and refuge.</p>
                </div>
                <div className="item">
                    <img className="gal_img" src="IMAGES/Artedomus-and-the-Heart-of-Italian-Craftsmanship-Issue-16-Feature-The-Local-Project-Image-24.jpg" alt="Artedomus and the Heart of Italian Craftsmanship" />
                    <h3>Artedomus and the Heart of Italian Craftsmanship</h3>
                    <p id="p4">Built on a deep mutual respect and a shared appreciation for each other's expertise, Artedomus’s relationships with its Italian partners are key to the company’s continuing success.</p>
                </div>
                <div className="item">
                    <img className="gal_img" src="IMAGES/Kesterson-House-by-Bunston-Issue-16-Feature-The-Local-Project-Image-14.jpg" alt="Kesterson House by Bunston" />
                    <h3>Adam Haddow lives here</h3>
                    <p>A respectful renovation of an historic home, Kesterson House is Bunston’s first completed project and a bold declaration of the firm’s architectural vision and design intentions.</p>
                </div>
                <div className="item">
                    <img className="gal_img" src="IMAGES/Superfreak-by-YSG-Issue-16-Feature-The-Local-Project-Image-13.jpg" alt="Superfreak by YSG" />
                    <h3>Superfreak by YSG</h3>
                    <p>Superfreak by YSG explores a dynamic mix of color, texture, and form to create an exciting and bold design that redefines modern living.</p>
                </div>
                <div className="item">
                    <img className="gal_img" src="IMAGES/Yukari-House-by-Tanev-Muir-Architects-Video-Feature-The-Local-Project-Image-9.jpg" alt="Waitī House by Crosson Architects" />
                    <h3>Waitī House by Crosson Architects and Ko & Ko</h3>
                    <p>Designed to embrace the wild terrain of its locale, Waitī House captures warmth, comfort, and natural connection through a stone-and-timber palette built around premium oak flooring from Forté.</p>
                </div>
                <div className="item">
                <img className="gal_img" src="IMAGES/Yukari-House-by-Tanev-Muir-Architects-Video-Feature-The-Local-Project-Image-12.jpg" alt="The Shepherds Hut by Fearon Hay"/>
                <h3>The Shepherds Hut by Fearon Hay</h3>
                <p id="p4">
                    Walking along Manhattan's Wall Street, a large black flag with Aesop in white text may be the last thing one would expect to see.
                </p>
                </div> 
            </div>
            <section className="books_Container">
            <div>
                <img className="booksImage" src="IMAGES/BOOKS.jpg" alt="Book collection" />
            </div>
            <div>
                <h3 id="bookh3">BOOK</h3>
            </div>
            <div>
                <h1>Habitats: City, Coast and Forest</h1>
            </div>
            <div>
                <p id="bookPara">
                    Introducing *Habitats: City, Coast and Forest*, the latest addition to The Local Project's collection of timeless publications.<br /><br />
                    This trio of hardcover books features 600 pages of extraordinary homes from across Australia, New Zealand, North America, and Canada. The collection masterfully captures the work of industry-leading design practices such as Smart Design Studio, Wardle, James Stockwell, Olson Kundig, Fearon Hay, Aires Mateus, Rob Mills Architecture & Interiors, Faulkner Architects, and Atelier L’Abri.<br /><br />
                    Each volume is a testament to a deeply considered architectural expression that goes beyond mere shelter and includes 10 such examples that demonstrate a harmonious connection with its natural surroundings.
                </p>
                <div className="bookTitles">
                <div className="bookItems"><p> <strong>Author:</strong> {props.author}</p></div>
                <div className="bookItems"><p> <strong>Date:</strong> {props.date}</p></div>
                <div className="bookItems"><p> <strong>Title:</strong> {props.title}</p></div>
                </div>
            </div>
            <div>
                <button className="headerButtonLeft">ORDER NOW</button>
            </div>
           
            <hr />
         </section>
         </section>
         

    );
}


export default FSimage 