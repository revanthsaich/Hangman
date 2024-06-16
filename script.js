// let word = ["W", "O", "R", "L", "D"];
let text = Array.from(document.querySelectorAll(".txt"));
let error = document.querySelector(".error");
let chance=document.querySelector(".chances");
let chances=3;
const hangmanData = [
    { word: "APPLE", hint: "A common fruit that keeps the doctor away." },
    { word: "CHAIR", hint: "You sit on it." },
    { word: "BAKER", hint: "A person who makes bread and cakes." },
    { word: "RIVER", hint: "A natural flowing watercourse." },
    { word: "GHOST", hint: "A supernatural entity often depicted as a spirit of the dead." },
    { word: "TABLE", hint: "A piece of furniture with a flat top and one or more legs." },
    { word: "HOUSE", hint: "A building for human habitation." },
    { word: "PLANT", hint: "A living organism that typically grows in the earth and has green leaves." },
    { word: "PHONE", hint: "A device used to make calls." },
    { word: "MOUSE", hint: "A small rodent often found in homes or a computer input device." },
    { word: "CLOCK", hint: "A device used to tell time." },
    { word: "OCEAN", hint: "A large body of salt water that covers most of the Earth's surface." },
    { word: "TRAIN", hint: "A form of transport that runs on tracks." },
    { word: "LIGHT", hint: "Something that makes things visible or bright." },
    { word: "BRAIN", hint: "An organ in your head that controls your thoughts and actions." },
    { word: "PIANO", hint: "A large musical instrument with black and white keys." },
    { word: "STORE", hint: "A place where goods are sold." },
    { word: "BEACH", hint: "A sandy or pebbly shore by the ocean." },
    { word: "HEART", hint: "An organ that pumps blood throughout the body." },
    { word: "WHEAT", hint: "A cereal plant that is used to make flour." },
    { word: "QUEEN", hint: "A female ruler or the wife of a king." },
    { word: "MONEY", hint: "What you use to buy things." },
    { word: "FRAME", hint: "A structure that surrounds or encloses something, often a picture." },
    { word: "GRASS", hint: "A plant that is found in lawns and fields." },
    { word: "BREAD", hint: "A common food made from flour and water." },
    { word: "SHEEP", hint: "An animal often raised for wool and meat." },
    { word: "FLUTE", hint: "A musical instrument that you play by blowing across a hole." },
    { word: "CAMEL", hint: "A desert animal known for its humps." },
    { word: "GRAPE", hint: "A small, sweet fruit often used to make wine." },
    { word: "PLANE", hint: "A vehicle that flies in the air." },
    { word: "SWORD", hint: "A weapon with a long metal blade." },
    { word: "BRUSH", hint: "A tool with bristles used for cleaning or painting." },
    { word: "BLOCK", hint: "A solid piece of material typically with flat surfaces." },
    { word: "FIELD", hint: "An open area of land, often used for farming or sports." },
    { word: "STONE", hint: "A hard, solid substance found in the ground." },
    { word: "CROWN", hint: "A decorative headdress worn by royalty." },
    { word: "DRILL", hint: "A tool used for making holes." },
    { word: "FLAME", hint: "The visible part of a fire." },
    { word: "PEARL", hint: "A precious gem formed inside an oyster." },
    { word: "HONEY", hint: "A sweet substance made by bees." },
    { word: "LEMON", hint: "A sour yellow fruit." },
    { word: "ROBOT", hint: "A machine capable of carrying out complex actions." },
    { word: "STORM", hint: "A severe weather condition with strong winds and rain." },
    { word: "TRAIN", hint: "A form of transport that runs on tracks." },
    { word: "CLOCK", hint: "A device used to tell time." },
    { word: "FLASK", hint: "A container used to hold liquids." },
    { word: "CABIN", hint: "A small wooden house in a rural area." },
    { word: "BADGE", hint: "A small object worn to show a person's status or achievement." },
    { word: "WHALE", hint: "A large marine mammal." },
    { word: "BLAZE", hint: "A large, strong fire." },
    { word: "MANGO", hint: "A tropical fruit with sweet, juicy flesh." },
    { word: "GLOBE", hint: "A spherical representation of the Earth." },
    { word: "NURSE", hint: "A healthcare professional who cares for patients." },
    { word: "KIOSK", hint: "A small, open-fronted hut or cubicle." },
    { word: "POUCH", hint: "A small bag or sack." },
    { word: "RAVEN", hint: "A large, black bird known for its intelligence." },
    { word: "SALAD", hint: "A dish consisting of mixed pieces of food, typically with dressing." },
    { word: "TIGER", hint: "A large wild cat with a distinctive orange and black striped coat." },
    { word: "VIOLA", hint: "A musical instrument slightly larger than a violin." },
    { word: "WRIST", hint: "The joint between the hand and the forearm." },
    { word: "YEAST", hint: "A fungus used in baking and brewing." },
    { word: "ZEBRA", hint: "An African wild horse with black-and-white stripes." },
    { word: "QUILT", hint: "A warm bed covering made of padding enclosed between layers of fabric." },
    { word: "PIANO", hint: "A large musical instrument with black and white keys." },
    { word: "RADIO", hint: "A device for receiving or transmitting radio broadcasts." },
    { word: "SKULL", hint: "The bone structure that forms the head." },
    { word: "TORCH", hint: "A portable light source, often using fire." },
    { word: "URBAN", hint: "Relating to a city or town." },
    { word: "VIVID", hint: "Producing powerful feelings or strong, clear images in the mind." },
    { word: "WHISK", hint: "A utensil used for whipping or stirring." },
    { word: "YACHT", hint: "A large, luxurious boat." },
    { word: "XENON", hint: "A chemical element with the symbol Xe and atomic number 54." },
    { word: "TOAST", hint: "Sliced bread browned by exposure to heat." },
    { word: "JOLLY", hint: "Full of high spirits; joyous." },
    { word: "LEDGE", hint: "A narrow horizontal surface projecting from a wall or other surface." },
    { word: "NAVAL", hint: "Related to a country's navy." },
    { word: "PIVOT", hint: "A central point on which a mechanism turns or oscillates." },
    { word: "QUARK", hint: "A type of elementary particle and a fundamental constituent of matter." },
    { word: "SCARF", hint: "A length of fabric worn around the neck." },
    { word: "TULIP", hint: "A bulbous spring-flowering plant with boldly colored flowers." },
    { word: "UDDER", hint: "The mammary gland of female cattle, goats, etc." },
    { word: "VOWEL", hint: "A speech sound produced without blocking the breath channel." },
    { word: "WALTZ", hint: "A ballroom dance in triple time." },
    { word: "XYLOL", hint: "Another term for xylene, a volatile liquid used as a solvent." },
    { word: "YOUTH", hint: "The period between childhood and adult age." },
    { word: "ZIPPY", hint: "Bright, fresh, or lively." },
    { word: "FJORD", hint: "A long, deep, narrow body of water that reaches far inland." },
    { word: "GRILL", hint: "A device for cooking food over an open fire." },
    { word: "HOUND", hint: "A type of dog used for hunting." },
    { word: "IVORY", hint: "A hard, white material from the tusks of elephants." },
    { word: "JUNTA", hint: "A military or political group that rules a country after taking power by force." },
    { word: "KNEEL", hint: "To bend one's legs so that one's knees are on the ground." },
    { word: "LIVER", hint: "A large organ in the body that processes substances in the blood." },
    { word: "NOBLE", hint: "Belonging to a hereditary class with high social or political status." },
    { word: "OXIDE", hint: "A binary compound of oxygen with another element or group." },
    { word: "PLUSH", hint: "A rich fabric of silk, cotton, wool, or a combination of these, with a long, soft nap." },
    { word: "QUAIL", hint: "A small, short-tailed Old World game bird." },
    { word: "ROGUE", hint: "A dishonest or unprincipled man." },
    { word: "SMIRK", hint: "A smug or conceited smile." },
    { word: "TRAMP", hint: "A person who travels from place to place on foot in search of work or as a vagrant." },
    { word: "USURP", hint: "To take a position of power or importance illegally or by force." },
    { word: "VALOR", hint: "Great courage in the face of danger, especially in battle." },
    { word: "WRATH", hint: "Extreme anger." },
    { word: "XENIA", hint: "The effect of genes introduced by pollen, especially on endosperm and fruit." },
    { word: "YIELD", hint: "To produce or provide (a natural, agricultural, or industrial product)." }
];
const currentWordData = hangmanData[Math.floor(Math.random() * hangmanData.length)];
let word = currentWordData.word;
let hint_data = currentWordData.hint;
let hint=document.querySelector(".hint");
function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
let pos=[];
let rand = getMultipleRandom(word, 3);
// console.log(rand);
hint.innerHTML="Hint: "+hint_data;
function disable(e,i)
{   
    let index = word.indexOf(e);
    if (index !== -1) {
        text[index].value = e;
        pos[i]=index;
        text[index].disabled=true;
    }

}
rand.forEach((e, i) => {
    disable(e,i);
    
});
function check(){
text.forEach((input,index) => {
    
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                console.log(this.value);
                console.log(index)
                if(this.value===word[index])
                {
                    console.log("true");
                    disable(this.value,index);
                    error.innerHTML="";
                    checkWin();
                }
                else
                {
                    chance.innerHTML=chances
                    text[index].value="";
                    error.innerHTML="Incorrect choice";
                    chances-=1;
                    chance.innerHTML="Chances Left: "+chances;
                    console.log(chances);
                    if(chances===0)
                    {
                        text.forEach((e,i)=>
                        {
                            text[i].disabled=true;
                            error.innerHTML="Game Over!!"
                        });
                    }
                }
            }
        });
    
});
}
function checkWin() {
    let correctCount = 0;
    text.forEach((input, index) => {
        if (input.value === word[index]) {
            correctCount++;
        }
    });

    if (correctCount === word.length) {
        error.innerHTML = "Congratulations! You Win!";
        text.forEach((e, i) => {
            text[i].disabled = true;
        });
    }
}
check();
// console.log(pos.sort());