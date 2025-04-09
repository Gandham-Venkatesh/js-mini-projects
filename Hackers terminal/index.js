let a = document.getElementsByTagName("h3")[0]
console.log(a)
a.className = "tog"
console.log(a.classList)
setInterval(() => {
    a.classList.toggle("tog")
}, 500)

const blink=(p)=>{
    setInterval(()=>{
        p.classList.toggle("blink")
    },50)
  
}
const createAndAppend = () => {
    let console1 = document.createElement("div")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    let p5 = document.createElement("p")
    let p6 = document.createElement("p")
    let p7 = document.createElement("p")
    let p8 = document.createElement("p")
    

    p1.className = p2.className = p3.className = p4.className = p5.className = p6.className = p7.className = p8.className="para";


    console1.className = "console"
    console1.append(p1, p2, p3, p4, p5, p6, p7, p8)
    return { console1, p1, p2, p3, p4, p5, p6, p7, p8 };
}

const click = async() => {
    let username = document.getElementById("username")
    let firstDiv = document.getElementsByClassName("con")[0]
    const { console1, p1, p2, p3, p4, p5, p6, p7, p8 } = createAndAppend();
    let existingConsole = document.querySelector(".console"); // Check if console1 already exists

    if (existingConsole) {
        existingConsole.remove(); // Remove the existing console1 div if it exists
    }
    firstDiv.after(console1)
    let text = username.value
    let prom = new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Fetching started....................................................")
        },1000)
    })
    let a= await prom
    console.log(a)
    p1.innerHTML = a
    blink(p1)
    let prom1 = new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`Finding user with the username ${text} in Instagram database`)
        },2000)
    })
    let btn= await prom1
    console.log(btn)
    p2.innerHTML = btn
    blink(p2)
    let prom2 = new Promise(resolve =>{
        setTimeout(()=>{
            resolve("User found and fetched successfully!")
        },3000)
    })
    let c= await prom2
    console.log(c)
    p3.innerHTML = c
    blink(p3)
    let prom3 = new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Performing bruteforce method to hack the password")
        },4000)
    })
    let d= await prom3
    console.log(d)
    p4.innerHTML = d
    blink(p4)
    let prom4 = new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Bruteforce method completed successfully!")
        },5000)
    })
    let e= await prom4
    console.log(e)
    p5.innerHTML = e
    blink(p5)
    let prom5 = new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`${text} user has got hacked successfully `)
        },4000)
    })
    let f= await prom5
    console.log(f)
    p6.innerHTML = f
    blink(p6)
    let prom6 = new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Removing 2 step verification authentication from the server")
        },3000)
    })
    let g= await prom6
    console.log(g)
    p7.innerHTML = g
    blink(p7)
    let prom7 = new Promise(resolve =>{
        setTimeout(()=>{
            resolve("2 step verification removed successfully! click on the button to access the password")
        },2000)
    })
    let h= await prom7
    console.log(h)
    p8.innerHTML = h
    blink(p8)
    let btn1= document.createElement("a")
    btn1.href = "https://i.imgflip.com/4cmnqw.png?a479424"
    btn1.innerHTML = "Password"
    btn1.target = "_blank"
    btn1.className="btn"
    console1.append(btn1)


}
let but = document.getElementsByTagName("button")[0]
but.onclick = () => {
    let username = document.getElementById("username")
    let data= username.value
    if(data){
        click()
    }
    else{

        username.placeholder="Please enter a username"
        username.classList.add("error")
    }
   
}




