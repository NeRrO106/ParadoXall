import styles from "./politici.scss";

function Termeni() {
  return (
    <div className={styles["politici-container"]}>
      <h1>Termeni și Condiții</h1>
      <h5>Ultima actualizare: []</h5>
      <p>
        Acești Termeni și Condiții guvernează utilizarea site-ului web al
        restaurantului Restaurant ("Site-ul"). Prin accesarea și utilizarea
        Site-ului, sunteți de acord cu acești Termeni și Condiții.
      </p>

      <h2>1. Definiții</h2>
      <ul>
        <li><strong>Site-ul:</strong> Website-ul oficial al restaurantului Restaurant.</li>
        <li><strong>Utilizator:</strong> Orice persoană care accesează și utilizează Site-ul.</li>
        <li><strong>Conținut:</strong> Orice informație, text, grafică, fotografii, meniuri sau alte materiale publicate pe Site.</li>
      </ul>

      <h2>2. Acceptarea Termenilor</h2>
      <p>
        Prin utilizarea Site-ului, confirmați că ați citit, înțeles și sunteți
        de acord cu acești Termeni și Condiții. Continuarea utilizării
        constituie acceptarea versiunii actualizate.
      </p>

      <h2>3. Utilizarea Site-ului</h2>
      <p>
        Utilizatorii sunt de acord să folosească Site-ul în conformitate cu
        legile aplicabile și acești Termeni. Este interzisă folosirea în scopuri ilegale.
      </p>

      <h2>4. Rezervări și Comenzi Online</h2>
      <p>
        Utilizatorii sunt responsabili pentru furnizarea unor informații corecte.
        Restaurant nu răspunde pentru rezervări neconfirmate sau informații greșite.
      </p>

      <h2>5. Drepturile de Proprietate Intelectuală</h2>
      <p>
        Toate drepturile asupra conținutului aparțin Restaurant sau licențiatorilor.
        Nu aveți voie să copiați sau distribuiți fără acord.
      </p>

      <h2>6. Limitarea Răspunderii</h2>
      <p>
        Site-ul este oferit "ca atare". Restaurant nu garantează funcționarea continuă.
        Nu este responsabil pentru daune indirecte sau directe.
      </p>

      <h2>7. Politica de Confidențialitate</h2>
      <p>
        Confidențialitatea datelor dvs. este importantă. Politica noastră de confidențialitate
        descrie modul în care colectăm și protejăm informațiile personale.
      </p>

      <h2>8. Modificări ale Termenilor</h2>
      <p>
        Putem modifica acești termeni. Este responsabilitatea dvs. să verificați periodic această pagină.
      </p>

      <h2>9. Legea Aplicabilă și Jurisdicția</h2>
      <p>
        Acești termeni sunt guvernați de legislația din România. Disputele vor fi soluționate de instanțele competente.
      </p>

      <h2>10. Contact</h2>
      <p>
        Pentru întrebări, scrieți-ne la:{" "}
      </p>
    </div>
  );
}

export default Termeni;
