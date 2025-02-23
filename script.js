var categories = [
    "jakker", "sko", "bluser", "bukser", "tasker", "solbriller"
]
 /*
 Det første vi gør her, er at lave en database af produkter igennem javascript. Normalt ville man lave en database i f.eks. SQL, men for at gøre
 det mere simpelt og nemmere har vi lavet det i javascript. Her har vi lavet en variable der hedder products hvor alle vores produkter skal være under.
 Alle produkter har hvert sit id med et tal efter så man kan kende forskel på dem, disse er kaldt nøgleværdipar. 
 Vi har lavet flere forskellige nøgleværdipar som mine produkter er defineret efter.
 Disse er navn, brand osv. ovenover dette har vi derudover lavet en variable kaldt categories som viser de forskellige kategorier vores produkter kan inddeles i.
 Til sidst har vi lavet en funktion som hedder getProducts, denne skal kunne hente vores produkter vi har lavet ind på siden. 
 */
var products = [
    { id: 1, name: "Jakke", brand: "GUCCI", price: 8000, image: "gucci.png", gender: "female", category: "jakker", size: "XS"}, 
    { id: 2, name: "Sko", brand: "Ferragamo", price: 3000, image: "ferragamo.png", gender: "female", category: "sko", size: 38}, 
    { id: 3, name: "Taske", brand: "Bottegaveneta", price: 3500, image: "bottegaveneta.png", gender: "female", category: "tasker", size: "S"}, 
    { id: 4, name: "Solbriller", brand: "Chanel", price: 1000, image: "chanel.jpg", gender: "female", category: "solbriller", size: "M"}, 
    { id: 5, name: "Bukser", brand: "Louisvuitton", price: 5000, image: "louis.jpg", gender: "female", category: "bukser", size: "L"}, 
    { id: 6, name: "Taske", brand: "Dior", price: 6000, image: "dior.jpg", gender: "female", category: "tasker", size: "S"}, 


]
/* 
Vi laver vores produkter i vores basket om til JSON.parse dette gør så at de forbliver objekter som så kan gemmes i local storage. 
Så henter vi itemmen med nøglen basket i min local storage.
Derefter siger vi så at hvis der ikke er noget i vores basket så skal der ikke vises noget.

*/
var basket = JSON.parse(localStorage.getItem("basket"))
if(!basket) basket = []

/*
Vi har nu ændret funktionen fra at den bare returnerer vores produkter til at lave en liste hvor vi kan hente mine produkter fx ved at søge.
I denne funktion vil vi starte med at lave det for min nøgle som er gender. Her laver vi en variabel som hedder filteredProducts denne skal være lig med vores
produkter. Så siger vi så at hvis gender skal filtreres så skal filteredProcts være lig med filteredproducts.filter og så skal vi derefter have et produkt.
Dette gøres for at vi kan filtrere vores produkter efter det gender man udgiver altså køn. Det produkt skal jo være gender og derfor skriver vi det som.
products.gender dette skal være det samme som gender fordi det jo skal udgive kun de produkter som fx er male hvis det er det vi har skrevet. 
Vores return produkts er der stadig fra før, den bliver nu ændret til at den skal returnere alle.
Vores filtreret produkter så den returnerer det vi søger efter.

*/

/*
Den første linje laver vi en funktion der hedder getProducts som tager 3 parametre disse er gender, category og name, 
formålet med funktionen er at kunne udvælge produkter baseret på gender, caregory og name.  
Den næste linje laver vi en variabel der hedder filtredProducts til at gemme vores resultat. Vi initalisere den med den fulde liste af produkter. 
Så kommer næste linje hvor vi laver en if. Hvis parameteren gender er sat vil vi filtrere vores produkter på gender. 
Når man laver en if sætning så kan det enten være true eller false. 
Hvis gender er Falsy det vil sige ikke har nogen værdi gør vi ikke noget. men hvis den er sat, filtrer vi vores produkter baseret på gender.  
For at filtrere vores liste af produkter anvender vi funktionen filter som er en standart funktion på arrays. filter funktionen tager en funktion som parametre. 
Resultatet af funktionen er sandt eller falks og angiver om elementet skal medtages i resultatet. 
Vi bruger en arrow => funktion som alternativ til en traditionel funktion. 
Idet den er kortere og let at læse. Funktionen tager parametrene products og returnere true hvis product.gender er lig med gender.  
Vi sætter filteredProducts lig med den filtreret liste.  
Vi gør det præcis samme bare med category baseret på den filtreret liste.  
Til sidst laver vi en filtrering på navn, denne gang baseret på en tekst søgning. Vi anvender funktionen includes som er en standart funktion på string.  
Include funktionen laver en case sensitiv søgning af om en given string er en delmængde af en anden string. 
Hvis includes returnerer true, skal elementet inkluderes i listen. 
Igen sætter vi filteredProducts lig med den filtreret liste og returnerer filteredProducts. 

*/

function getProducts(gender, category, name) {
    var filteredProducts = products
    if (gender) {
        filteredProducts = filteredProducts.filter(product=>product.gender == gender)
    }
    if (category) {
        filteredProducts = filteredProducts.filter(product=>product.category == category)
    }
    if (name) {
        filteredProducts = filteredProducts.filter(product=>product.name.includes(name))
    }
    return filteredProducts


}

/*
Først har vi lavet en variabel der hedder html, derefter har vi lavet en variabel der hedder c som starter med en værdi på 0.
Så henter vi vores products og så siger vi til den at for hver produkt så skal der være rækker og kolonner.
For at lave disse rækker og kolonner hvor vores produkter skal være i skal vi skrive noget java script. Vi har valgt at der skal være 3 kolonner og 2 rækker. 
Vi laver derfor en if. i denne bruger vi modulus operatoren. Den giver os resten af en division, 
hver gang resten er lig med 0 når vi dividerer med 3 skal vi have en ny række. Og hver gang resten er lig med 2 skal vi afslutte rækken. 
Vi har i vores css lavet 2 classes som hedder row og coulum. I males har vi bare lavet rækker og kolonner i statisk html uden JavaScript.
Her laver vi først en div som vi giver en class der så referer til vores css. 
Denne bliver brugt til at få vores rækker og kolonner til at se ud som vi gerne vil have det.
Dette har vi under females så lavet med JavaScript i stedet og vi skriver derfor html+= og så skriver vi så det samme som vi ville gøre i vores statiske html. 
Altså "<div class='row'>" og "<div class='column'>". Dette skal selvfølgelig også afsluttes med en div igen. 
Til sidst laver vi en c++ som gør at c bliver ved med at gå op fra 0 med 1.
Vi laver imellem vores rækker og kolonner noget der hedder html+=product.name, når man skriver product. Så kommer alle de forskellige nøgler frem som vi har, 
beskrevet vores produkter med, dette er f.eks brand, name, price osv. 
Før stod der c hvor den viste de forskellige tal fra 0 til 5 da der er 2 rækker og 6 kolonner, nu
er det bare defineret med noget andet. 
Vi bruger derefter dette til at vise de produkter der skal være i vores kolonner dette gør vi ved at referere til html
og så får vi den så til at vise det vi gerne vil have i kolonnen. 

*/
function renderProducts(gender, category, name) {
    var html = ""
    var c = 0
    var fProducts = getProducts(gender, category, name) 
    console.log(name)
    fProducts.forEach(product => {
        if (c % 3 === 0) { //Når resten er lig med 0 skal vi have en ny række. 
            html+="<div class='row'>"
        }
        
        html+="<div class='column'>"


        html+="<h3>"
        html+=product.name
        html+="</h3>"
        html+="<img src='images/"
        html+=product.image
        html+="'>"
        html+="<p>"
        html+=product.brand
        html+="</p>"
        html+="<p>Størrelse: "
        html+=product.size
        html+="</p>"
        html+="<p>Pris: "
        html+=product.price
        html+=" kr.</p>"
        html+="<button onclick='addToBasket("
        html+=product.id
        html+=")'>Læg i kurv</button>"


        

        html+="</div>"
        if (c % 3 === 2) { //Når resten er lig med 2 skal vi slutte rækken, altså efter 2 og efter 5, fordi vi starter med 0. 
            html+="</div>"
        }
        
        c++
    
    })
    document.getElementById("products").innerHTML=html
    console.log(html)
}
//Vi bruger denne til at vælge et produkt, vi bruger denne kode til at adde mine produkter til min kurv. 
// Vi laver det derefter så at man kun kan ligge et produkt i en gang.
function addToBasket(id) {
    if (!basket.find(i=> i == id)) {
        basket.push(id)
    }
    
    console.log(basket)
    localStorage.setItem("basket",JSON.stringify(basket))

}

/*
Denne funktion gør så at når vi siger at den skal clear vores basket igennem den knap vi lavede under min basket html så fjerner den alt.
Det vi har i vores kurv. Ved at bruge localstorgae.setitem gør det så at den gemmer det vi har addet til vores basket så det ikke bliver fjernet. 
Når man gemmer i local storge kan man kun gemme i strenge. 
Så vi konverterer vores basket til en string. Det gør vi til en JSON string. Og så render vi vores basket igen så at den opdaterer det.

*/

function clearBasket(){
    basket = []
    localStorage.setItem("basket",JSON.stringify(basket))
    renderBasket()
}

/*
Vi laver det samme herunder som vi gjorde med render produkts fordi den skal jo vise de samme produkter i vores basket 
når vi adder dem som det er på vores shop side.
*/

function renderBasket() {
    var html = ""
    var c = 0
    
    
    basket.forEach(id => {
        var product=products.find(p=> p.id == id)
        console.log(product)
        if (c % 3 === 0) { //Når resten er lig med 0 skal vi have en ny række. 
            html+="<div class='row'>"
        }
        
        html+="<div class='column'>"


        html+="<h3>"
        html+=product.name
        html+="</h3>"
        html+="<img src='images/"
        html+=product.image
        html+="'>"
        html+="<p>"
        html+=product.brand
        html+="</p>"
        html+="<p>Størrelse: "
        html+=product.size
        html+="</p>"
        html+="<p>Pris: "
        html+=product.price
        html+="</p>"
        html+="<button onclick='addToBasket("
        html+=product.id
        html+=")'>Læg i kurv</button>"


        

        html+="</div>"
        if (c % 3 === 2) { //Når resten er lig med 2 skal vi slutte rækken, altså efter 2 og efter 5, fordi vi starter med 0. 
            html+="</div>"
        }
        
        c++
    
    })
    document.getElementById("basket").innerHTML=html
    console.log(html)
}