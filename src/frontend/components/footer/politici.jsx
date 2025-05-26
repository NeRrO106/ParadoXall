import styles from "./politici.scss";

function Politici() {
  return (
    <div className={styles["politici-container"]}>
      <h1>Politica de Confidențialitate și Protecție a Datelor</h1>

      <p>
        <strong>Restaurant</strong> se angajează să protejeze confidențialitatea și
        securitatea datelor personale ale utilizatorilor. Această politică explică
        modul în care colectăm, utilizăm și protejăm datele.
      </p>

      <h2>1. Colectarea Datelor Personale</h2>
      <p>
        Colectăm date în următoarele situații:
        <ul>
          <li><strong>Formulare de contact:</strong> Nume, email, telefon.</li>
          <li><strong>Comenzi online:</strong> Nume, adresă, email, telefon, plată.</li>
        </ul>
      </p>

      <h2>2. Utilizarea Datelor Personale</h2>
      <p>
        Datele sunt utilizate pentru:
        <ul>
          <li><strong>Procesarea comenzilor</strong></li>
          <li><strong>Comunicare și suport</strong></li>
        </ul>
      </p>

      <h2>3. Securitatea Datelor</h2>
      <p>
        Protejăm datele personale prin:
        <ul>
          <li><strong>Tehnologie de criptare</strong></li>
          <li><strong>Acces limitat la date</strong></li>
        </ul>
      </p>

      <h2>4. Drepturile Utilizatorilor</h2>
      <p>
        Aveți dreptul la:
        <ul>
          <li><strong>Acces</strong>, <strong>rectificare</strong>, <strong>ștergere</strong>, <strong>opoziție</strong>.</li>
        </ul>
      </p>

      <h2>5. Transferul Datelor</h2>
      <p>
        Datele pot fi transmise către:
        <ul>
          <li><strong>Furnizori de servicii</strong></li>
          <li><strong>Autorități legale</strong></li>
        </ul>
      </p>

      <h2>6. Politica de Confidențialitate a Terților</h2>
      <p>
        Nu răspundem pentru politicile altor site-uri către care avem linkuri.
      </p>

      <h2>7. Modificări ale Politicii</h2>
      <p>
        Politica poate fi actualizată. Vă recomandăm să reveniți periodic.
      </p>

      <h2>8. Contact</h2>
      <p>
        <ul>
          <li><strong>Email:</strong> </li>
          <li><strong>Telefon:</strong> telefon</li>
          <li><strong>Adresa:</strong> Adresa</li>
        </ul>
      </p>
    </div>
  );
}

export default Politici;
