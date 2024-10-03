import React from "react";
import "./info.css"

function Info(){
    return(
        <>
            <h2>Tabel Prețuri</h2>
            <table>
                <thead>
                    <tr>
                        <th>Localitate</th>
                        <th>Preț (lei)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Castelu</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Satu Nou</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Cuza Vodă</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Mircea Vodă</td>
                        <td>150</td>
                    </tr>
                    <tr>
                        <td>Tortomanu</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Valea Dacilor</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default Info