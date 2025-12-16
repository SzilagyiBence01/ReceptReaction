import React from "react";

/* 
    About page ahol információt kaphatunk az alkalmazás ekészülésének okáról és egyéb informciókról
*/
export default function AboutPage(){
    
    return(
        <div className="text-formalization">
            <h1>Az alkalmazásról</h1>
            <p>
                Az alkalmazás egy React-alapú
                kliensoldali rendszer, innen is a {/* kiemelés a lényeghez */} <strong>Recept <span style={{ color: "red", fontWeight: "bold" }}>React</span>ion</strong> elnevezés.
            </p>
            <p>
                Az oldal a {/**/}
                {/* link a tárgyolnapra */}
                <a
                href="https://portal.vik.bme.hu/kepzes/targyak/VIAUAC17/"
                target="_blank"
                >
                Kliensoldali rendszerek
                </a> {/**/}
                nevű tárgy házifeladataként készült, és annak feltételeit igyekszik
                megvalósítani.
            </p>
            <p>
                Az oldal logójának elkészítéséhez a ChatGPT-t használtam, hogy a
                felületet esztétikusabbá és profi kinézetűvé alakítsam. Ezen kívül
                máshol nem alkalmaztam mesterséges intelligenciát.
            </p>
        </div>
    )
}