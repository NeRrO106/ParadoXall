import React from "react";
import "./politici.css";

function Alergeni() {
  return (
    <div className="politici-container">
      <h1>Lista de alergeni a produselor regăsite în meniul nostru</h1>
      <h2>
        Stimați clienți, <br></br>Pentru a evita consumul unui preparat ce poate
        cauza reacții alergice, înainte de a comanda vă rugăm să consultați
        lista noastră de alergeni.
      </h2>
      <h2>
        1. Cereale care conţin gluten (grâu, secară, orz, ovăz, grâu spelt, grâu
        mare sau hibrizi ai acestora) şi produse derivate, exceptând:
      </h2>

      <ul className="alergeni-ul">
        <li>
          {" "}
          a) siropurile de glucoză obţinute din grâu, inclusiv dextroza*);
        </li>
        <li> b) maltodextrinele obţinute din grâu*);</li>
        <li> c) siropurile de glucoză obţinute din orz;</li>
        <li>
          {" "}
          d) cerealele folosite la producerea de distilate sau alcool etilic de
          origine agricolă pentru băuturi spirtoase şi alte băuturi alcoolice.
        </li>
      </ul>

      <h2>2. Crustacee şi produse derivate</h2>
      <h2>3. Ouă şi produse derivate</h2>
      <h2>4. Peşte şi produse derivate, exceptând:</h2>

      <ul className="alergeni-ul">
        <li>
          {" "}
          a) gelatina de peşte folosită ca suport pentru preparatele de vitamine
          sau carotenoide;
        </li>
        <li>
          {" "}
          b) gelatina de peşte sau ihtiocolul folosit la limpezirea berii sau a
          vinului.
        </li>
      </ul>

      <h2>5. Arahide şi produse derivate</h2>
      <h2>6. Soia şi produse derivate, exceptând:</h2>

      <ul className="alergeni-ul">
        <li> a) uleiul şi grăsimile de soia, complet rafinate*);</li>
        <li>
          {" "}
          b) amestecul natural de tocoferoli (E306), tocoferolul D-alfa natural,
          acetatul de tocoferol D- alfa natural, succinatul de tocoferol D-alfa
          natural, obţinuţi din soia;
        </li>
        <li>
          {" "}
          c) fitosteroli şi esteri de fitosterol derivaţi din uleiuri vegetale
          extrase din soia;
        </li>
        <li>
          {" "}
          d) esterul de stanol vegetal produs din sterolii obţinuţi din uleiuri
          vegetale extrase din soia.
        </li>
      </ul>
      <h2>7. Lapte şi produse derivate (inclusiv lactoză), exceptând:</h2>
      <ul className="alergeni-ul">
        <li>
          {" "}
          a) zerul folosit la producerea de distilate sau alcool etilic de
          origine agricolă pentru băuturi spirtoase şi alte băuturi alcoolice;
        </li>
        <li> b) lactitolul.</li>
      </ul>
      <h2>8. Fructe cu coajă, de exemplu:</h2>
      <ul className="alergeni-ul">
        <li> a)migdale (Amygdalus communis L.),</li>
        <li> b)alune de pădure (Corylus avellana),</li>
        <li> c)nuci (Juglans regia),</li>
        <li> d)anacarde (Anacardium occidentale),</li>
        <li> e)nuci Pecan [Carya illinoiesis (Wangenh.) K. Koch],</li>
        <li> f)nuci de Brazilia (Bertholletia excelsa),</li>
        <li> g)fistic (Pistacia vera),</li>
        <li> h)nuci de macadamia</li>
        <li>
          {" "}
          i)nuci de Queensland (Macadamia ternifolia) şi produse derivate,
          exceptând nucile folosite la producerea de distilate sau alcool etilic
          de origine agricolă pentru băuturi spirtoase şi alte băuturi
          alcoolice.
        </li>
      </ul>
      <h2>9. Ţelină şi produse derivate</h2>
      <h2>10. Muştar şi produse derivate</h2>
      <h2>11. Seminţe de susan şi produse derivate</h2>
      <h2>
        12. Dioxid de sulf şi sulfiţi în concentraţii de peste 10 mg/kg sau 10
        mg/litru, exprimate în SO(2)
      </h2>
      <h2>13. Lupin şi produse derivate</h2>
      <h2>14. Moluşte şi produse derivate.</h2>
    </div>
  );
}
export default Alergeni;
