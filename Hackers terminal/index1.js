// let p = document.getElementsByTagName("h1")[0];
// let str= "Instagram Account Hack Tool"
// const blin=async()=>{
//     p.innerHTML="Instagram Account Hack Tool"

//     setInterval(async()=>{
//             if(p.innerHTML){
//                 p.innerHTML= "";
//             }

//         for( let i=0; i<str.length; i++ )
//             {
//                 let prom= new Promise((resolve)=>{
//                     setTimeout(()=>{
//                         resolve(str[i]);
//                     },70);
//                 })
//                 let a = await prom
//                 p.innerHTML= p.innerHTML + a;
//             }

//     },3000)

// }

// blin();

let p = document.getElementsByTagName("h1")[0];
let str = "Instagram Account Hack Tool";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const animateText = async () => {
    p.innerHTML = "";  // Clear the content
    for (let i = 0; i < str.length; i++) {
        p.innerHTML += str[i];  // Add one character at a time
        await delay(70);  // Wait for 70ms before the next character
    }
};

const blin = async () => {
    await animateText();  // Start the first animation
    setInterval(async () => {
        p.innerHTML = "";  // Clear the content
        await animateText();  // Start the animation again
    }, 3000);  // Restart the animation every 3 seconds
};

blin();
