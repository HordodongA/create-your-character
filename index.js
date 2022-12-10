

//page fill with JS
var siteContainer = document.querySelector("#Main-frame");
console.log(siteContainer)
var createCharButton = document.querySelector("button")

function startGenerate() {
    createCharButton.style.display = "none";
    var siteContent = `
    <div id="Title-section">
    <img src="content/Dungeons-and-Dragons-Logo_PNG1.png" alt="D 'n' D logo">
    </div>
    <div id="Character-section">
    <div id="Form">
        <h1>Caracter Creator</h1>
    
        <label for="name">Enter character's Name</label>
        <input id="Name-input" name="name" type="text" maxlength="30" placeholder="maximum 30 characters">
        
        <label for="class">Select character's class</label>
        <select id="Class-select" name="class">
            <option value="select"></option>
        </select>
        
        <label for="race">Select character's race</label>
        <select id="Race-select" name="race">
            <option value="Select race"></option>
        </select>
        
        <label for="gender">Select character's gender</label>
        <select id="Gender-select" name="gender">
            <option value="select"></option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        
        <label for="Backstory">Enter character's story</label>
        <textarea id="Backstory-input" name="Backstory" type="textarea" maxlength="200" placeholder="maximum 200 characters"></textarea>
    
        <img src="content/Dungeons-and-Dragons-Logo_PNG2.png" alt="D 'n' D logo">
    </div>
    
    <div id="Sheet">
        <!-- <img src="content/vintage-papre-scroll_01.png" alt=""> -->
        <h1></h1>
        <!-- <h1>Character's name max 30 chars.</h1> -->
        <div id="Character-details">
            <p></p>
            <p></p>
            <p></p>
            <img src="" alt="Biological gender">
            <p></p>
            <!-- <p>A regular expression is a sequence of characters that define a search pattern for parsing and finding matches in a given string.A regular expression is a sequence of characters that define a search p</p> -->
        </div>
        <div id="Character-picture">
        </div>
    </div>
    
    </div>
    `
    siteContainer.innerHTML = siteContent;
    // HTML rendered at this point

    // Datas for character creator

    var racesPHB = [
        { raceName: "Dragonborn", raceImg: "https://5e.tools/img/races/PHB/Dragonborn.png" },
        { raceName: "Dwarf", raceImg: "https://5e.tools/img/races/PHB/Dwarf.png" },
        { raceName: "Elf", raceImg: "https://5e.tools/img/races/PHB/Elf.png" },
        { raceName: "Gnome", raceImg: "https://5e.tools/img/races/PHB/Gnome.png" },
        { raceName: "Half-Elf", raceImg: "https://5e.tools/img/races/PHB/Half-Elf.png" },
        { raceName: "Halfling", raceImg: "https://5e.tools/img/races/PHB/Halfling.png" },
        { raceName: "Human", raceImg: "https://5e.tools/img/races/PHB/Human.png" },
        { raceName: "Tiefling", raceImg: "https://5e.tools/img/races/PHB/Tiefling.png" }
    ]

    var classesPHB = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]

    //Fill select item from array CLASS
    var selectClass = document.getElementById("Class-select");
    for (var i = 0; i < classesPHB.length; i++) {
        var classPHB = classesPHB[i];
        var opt = document.createElement("option");
        opt.textContent = classPHB;
        opt.value = classPHB;
        selectClass.appendChild(opt);
    }

    //Fill select item from object RACE
    var selectRace = document.getElementById("Race-select");
    for (const race of racesPHB) {
        var racePHB = race.raceName;
        var opt = document.createElement("option");
        opt.textContent = racePHB;
        opt.value = racePHB;
        selectRace.appendChild(opt);
    }
    // Select fields filled at this point


    //Catch input and print elements than fill them
    //NAME
    var nameInputElement = document.getElementById("Name-input");
    var namePrintElement = document.querySelector("#Sheet h1");
    function nameFiller() {
        namePrintElement.textContent = nameInputElement.value
    }
    nameInputElement.addEventListener("input", nameFiller);

    //CLASS
    var classSelectElement = document.getElementById("Class-select");
    var classPrintElement = document.querySelector("#Character-details p:first-child");
    function classFiller() {
        classPrintElement.textContent = classSelectElement.value
    }
    classSelectElement.addEventListener("change", classFiller);

    //RACE + PICTURE
    var raceSelectElement = document.getElementById("Race-select");
    var racePrintElement = document.querySelector("#Character-details p:nth-child(2)");
    var racePictureElement = document.getElementById("Character-picture");
    function raceFiller() {
        racePrintElement.textContent = raceSelectElement.value
        for (var i = 0; i < racesPHB.length; i++) {
            if (racesPHB[i].raceName === raceSelectElement.value) {
                racePictureElement.style.backgroundImage = "url(" + racesPHB[i].raceImg + ")"
                racePictureElement.style.visibility = "visible"
            }
        }
    }
    raceSelectElement.addEventListener("change", raceFiller);

    //GENDER + PICTOGRAM
    var genderSelectElement = document.getElementById("Gender-select");
    var genderPrintElement = document.querySelector("#Character-details p:nth-child(3)");
    var genderPictogramElement = document.querySelector("#Character-details img");
    function genderFiller() {
        genderPrintElement.textContent = genderSelectElement.value
        if (genderSelectElement.value === "female") {
            genderPictogramElement.setAttribute("src", "content/female_FILL0_wght400_GRAD0_opsz48.svg")
            genderPictogramElement.style.visibility = "visible"
        } else {
            genderPictogramElement.setAttribute("src", "content/male_FILL0_wght400_GRAD0_opsz48.svg")
            genderPictogramElement.style.visibility = "visible"
        }
    }
    genderSelectElement.addEventListener("change", genderFiller);

    //BACKSTORY
    var backstoryInputElement = document.getElementById("Backstory-input");
    var backstoryPrintElement = document.querySelector("#Character-details p:last-child");
    function backstoryFiller() {
        backstoryPrintElement.textContent = backstoryInputElement.value
    }
    backstoryInputElement.addEventListener("input", backstoryFiller);

}

createCharButton.addEventListener("click", startGenerate);
