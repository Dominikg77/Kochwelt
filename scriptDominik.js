function render() {
    hafertaler();
}

const sekunden = 5000;


function hafertaler() {
    let content = document.getElementById(`recipeOfTheDayDiv`);
    content.innerHTML = ``;
    content.innerHTML = /*html*/ `
<img id="recipeOfTheDayImg" src="img/hafertaler.jpg" alt="Hafertaler">
            <div id="recipeOfTheDayText">
                <h2 id="title">Hafertaler</h2>
                <p id="text">Haferflocken enthalten Antioxidantien <br> Haferflocken sind eine wertvolle Quelle für Antioxidantien. Diese haben eine positive Wirkung auf den Cholesterinspiegel, das Immunsystem <br> Zahlreiche Ballaststoffe machen den Hafer gesund Die gesunden Ballaststoffe im Hafer und im morgendlichen Porridge sorgen dafür, dass das Frühstück dich lange
                    satt hält. <br>Neben den Ballaststoffen ist das Superfood aus den heimischen Feldern aber auch reich an Vitaminen (Vitamin B1) und enthält
                    kaum Fett, sodass auch Sportler gerne auf die Hafer Mahlzeit zurückgreifen.</p>
                <button onclick="window.location.href = 'hafertaler.html';">Rezept öffnen</button>
            </div>
        </div>
`;
    setTimeout(roesti, sekunden);
}

function roesti() {
    let content = document.getElementById(`recipeOfTheDayDiv`);
    content.innerHTML = ``;
    content.innerHTML = /*html*/ `
<img id="recipeOfTheDayImg" src="img/rösti.jpg" alt="Rösti">
            <div id="recipeOfTheDayText">
                <h2 id="title">Rösti</h2>
                <p id="text">Rösti stammt aus der deutsch-schweizerischen Küche. Den Schweizern verliehen die goldbraun gebratenen Kartoffeln bereits zu Beginn des 19. Jahrhunderts als zünftiges Bauernfrühstück wichtige Energie für den Tag. Bei uns ist das Schweizer Nationalgericht als Beilage zu Fleischgerichten und als Hauptspeise beliebt.</p>
                <button onclick="window.location.href = 'roesti.html';">Rezept öffnen</button>
            </div>
        </div>
`;
    setTimeout(lahmacun, sekunden);
}

function lahmacun() {
    let content = document.getElementById(`recipeOfTheDayDiv`);
    content.innerHTML = ``;
    content.innerHTML = /*html*/ `
<img id="recipeOfTheDayImg" src="img/lahmacun.jpg" alt="Lahmacun">
            <div id="recipeOfTheDayText">
                <h2 id="title">Lahmacun</h2>
                <p id="text">Gebt es zu: am liebsten schlemmt ihr diese orientalische Köstlichkeit doch am Wochenende so ab 3 Uhr nachts. Wenn der Durst nicht mehr ganz so im Vordergrund steht und der Hunger nach einem delikaten Snack überwältigt: Besonders in Berlin und Köln haben türkische Imbisse dann Hochkonjunktur. Eine beliebte Speise ist dann Lahmacun. Die türkische Pizza, hauchdünn gebacken, aromatisch belegt und, je nach Wunsch, noch scharf aufgepeppt.</p>
                <button onclick="window.location.href = 'lahmacun.html';">Rezept öffnen</button>
            </div>
        </div>
`;
    setTimeout(hafertaler, sekunden);
}

/* Rösti berechnung V1*/

function calcRoesi() {
    let portion = document.getElementById(`portion`).value;
    let number1 = 1 * portion;
    let number2 = 0.25 * portion;
    let number3 = 0.25 * portion;
    let number4 = 0.2 * portion;
    let table = document.getElementById(`table`);
    table.innerHTML = ``;
    table.innerHTML = generateHtmlRoestiPortion(portion);
};


function generateHtmlRoestiPortion(portion) {
    let number1 = 1 * portion;
    let number2 = 0.25 * portion;
    let number3 = 0.25 * portion;
    let number4 = 0.2 * portion;
    return `
    <table>
    <tr>
        <td> ${number1.toFixed(2).replace('.', ',')} EL Bratbutter</td>
    </tr>
    <tr>
        <td> ${number2.toFixed(2).replace('.', ',')} TL Salz</td>
    </tr>
    <tr>
        <td> ${number3.toFixed(2).replace('.', ',')} kg Kartollfen, fest kochend</td>
    </tr>
    <tr>
        <td> ${number4.toFixed(2).replace('.', ',')} L Wasser</td>
    </tr>
    </table>
    `;
}


function calcHafertaler() {
    let portion = document.getElementById(`portion`).value;
    let table = document.getElementById(`table`);
    table.innerHTML = ``;
    table.innerHTML =
        generateHtmlHafertalerPortion(portion);
}

function generateHtmlHafertalerPortion(portion) {
    let number1 = 62.5 * portion;
    let number2 = 62.5 * portion;
    let number3 = 0.5 * portion;
    let number4 = 0.25 * portion;
    let number5 = 0.25 * portion;
    return ` <table>
<tr>
    <td> ${number1.toFixed(2).replace('.', ',')} g Quark</td>
</tr>
<tr>
    <td> ${number2.toFixed(2).replace('.', ',')} g Haferflocken</td>
</tr>
<tr>
    <td> ${number3.toFixed(2).replace('.', ',')} Eier</td>
</tr>
<tr>
    <td> ${number4.toFixed(2).replace('.', ',')} Pk. Backpulver</td>
</tr>
<tr>
    <td> ${number5.toFixed(2).replace('.', ',')} TL Salz</td>
</tr>
</table>
`;
}


function calcLahmacun() {
    let portion = document.getElementById(`portion`).value;
    let table = document.getElementById(`table`);
    table.innerHTML = ``;
    table.innerHTML =
        generateHtmlLahmacumPortion(portion);
}

function generateHtmlLahmacumPortion(portion) {
    let number1 = .250 * portion;
    let number2 = 1 * portion;
    let number3 = 0.75 * portion;
    let number4 = 0.5 * portion;
    let number5 = 0.25 * portion;
    let number6 = 0.5 * portion;
    let number7 = 1 * portion;
    let number8 = 0.25 * portion;
    let number9 = 0.5 * portion;
    let number10 = 1 * portion;
    let number11 = 0.75 * portion;
    let number12 = 1 * portion;
    let number13 = 250 * portion;
    let number14 = 125 * portion;
    let number15 = 0.25 * portion;
    let number16 = 0.25 * portion;
    let number17 = 62.5 * portion;
    return ` <table>
<tr>
    <td> ${number1.toFixed(2).replace('.', ',')} Kg Hackfleisch, gemischt (Lamm und Rind)</td>
</tr>
<tr>
    <td> ${number2.toFixed(2).replace('.', ',')} Tomaten </td>
</tr>
<tr>
    <td> ${number3.toFixed(2).replace('.', ',')} Zwiebel(n)</td>
</tr>
<tr>
    <td> ${number4.toFixed(2).replace('.', ',')} Zehe(n) Knoblauch</td>
</tr>
<tr>
    <td> ${number5.toFixed(2).replace('.', ',')} Bund Petersilie</td>
</tr>
<tr>
    <td> ${number6.toFixed(2).replace('.', ',')} Paprika, Rot</td>
</tr>
<tr>
    <td> ${number7.toFixed(2).replace('.', ',')} Peperoni</td>
</tr>
<tr>
    <td> ${number8.toFixed(2).replace('.', ',')} EL Margarine</td>
</tr>
<tr>
    <td> ${number9.toFixed(2).replace('.', ',')} EL Paprikamark</td>
</tr>
<tr>
    <td> ${number10.toFixed(2).replace('.', ',')} TL Salz</td>
</tr>
<tr>
    <td> ${number11.toFixed(2).replace('.', ',')} TL Pfeffer</td>
</tr>
<tr>
    <td> ${number12.toFixed(2).replace('.', ',')} TL Paprika, (Blattpaprika)</td>
</tr>
<tr>
    <td> ${number13.toFixed(2).replace('.', ',')} g Speck, Lammbauchspeck</td>
</tr>

</table>

<h3>Für den Teig:</h3>
<table>
<tr>
    <td> ${number14.toFixed(2).replace('.', ',')} g Mehl</td>
</tr>
<tr>
    <td> ${number15.toFixed(2).replace('.', ',')} TL Salz </td>
</tr>
<tr>
    <td> ${number16.toFixed(2).replace('.', ',')} Pk. Frischhefe</td>
</tr>
<tr>
    <td> ${number17.toFixed(2).replace('.', ',')} ML Wasser, lauwarm</td>
</tr>
</table>`;;
}