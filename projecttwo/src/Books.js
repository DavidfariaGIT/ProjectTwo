
import React from 'react';

function Books() {
    return (
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
            </div>
            <div>
                <button className="headerButtonLeft">ORDER NOW</button>
            </div>
            <hr />
        </section>
    );
}

export default Books;
