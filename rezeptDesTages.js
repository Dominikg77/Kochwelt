window.onload = function() {
    myFunction();
    myTitle();
    myText();
    myButton();
}

function myFunction() {
    document.getElementById('recipeOfTheDayImg').src = 'img/hafertaler.jpg'
    setTimeout(myFunction2, 3000);
}

function myFunction2() {
    document.getElementById('recipeOfTheDayImg').src = 'img/lahmacun.jpg'
    setTimeout(myFunction3, 3000);
}

function myFunction3() {
    document.getElementById('recipeOfTheDayImg').src = 'img/rösti.jpg'
    setTimeout(myFunction, 3000);
}





function myTitle() {
    document.getElementById('title').innerHTML = 'Hafertaler'
    setTimeout(myTitle2, 3000);
}

function myTitle2() {
    document.getElementById('title').innerHTML = 'Lahmacun'
    setTimeout(myTitle3, 3000);
}

function myTitle3() {
    document.getElementById('title').innerHTML = 'Rösti'
    setTimeout(myTitle, 3000);
}




function myText() {
    document.getElementById('text').innerHTML = 'Haferflocken enthalten Antioxidantien <br> Haferflocken sind eine wertvolle Quelle für Antioxidantien. Diese haben eine positive Wirkung auf den Cholesterinspiegel, das Immunsystem und die Verdauung. Sie wirken sich aber auch auf den Stoffwechsel(sowohl den für Kohlenhydrate als auch den für Fette) positiv aus. <br> Zahlreiche Ballaststoffe machen den Hafer gesund Die gesunden Ballaststoffe im Hafer und im morgendlichen Porridge sorgen dafür, dass das Frühstück dich lange satt hält. Zudem kurbeln sie die Verdauung an und helfen dabei auf natürliche Weise gegen Verstopfung. <br>Neben den Ballaststoffen ist das Superfood aus den heimischen Feldern aber auch reich an Vitaminen (Vitamin B1) und enthält kaum Fett, sodass auch Sportler gerne auf die Hafer Mahlzeit zurückgreifen.'
    setTimeout(myText2, 3000);
}

function myText2() {
    document.getElementById('text').innerHTML = 'Gebt es zu: am liebsten schlemmt ihr diese orientalische Köstlichkeit doch am Wochenende so ab 3 Uhr nachts. Wenn der Durst nicht mehr ganz so im Vordergrund steht und der Hunger nach einem delikaten Snack überwältigt: Besonders in Berlin und Köln haben türkische Imbisse dann Hochkonjunktur. Eine beliebte Speise ist dann Lahmacun. Die türkische Pizza, hauchdünn gebacken, aromatisch belegt und, je nach Wunsch, noch scharf aufgepeppt.'
    setTimeout(myText3, 3000);
}

function myText3() {
    document.getElementById('text').innerHTML = 'Rösti stammt aus der deutsch-schweizerischen Küche. Den Schweizern verliehen die goldbraun gebratenen Kartoffeln bereits zu Beginn des 19. Jahrhunderts als zünftiges Bauernfrühstück wichtige Energie für den Tag. Bei uns ist das Schweizer Nationalgericht als Beilage zu Fleischgerichten und als Hauptspeise beliebt.'
    setTimeout(myText, 3000);
}




function myButton() {
    document.getElementById('button').href = 'hafertaler.html'
    setTimeout(myButton2, 3000);
}

function myButton2() {
    document.getElementById('button').href = 'lahmacun.html'
    setTimeout(myButton3, 3000);
}

function myButton3() {
    document.getElementById('button').href = 'rösti.html'
    setTimeout(myButton, 3000);
}