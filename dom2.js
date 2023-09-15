let addfrd = document.getElementById("addfriend")
let removestranger = document.querySelector("h3")
let n = document.getElementById("Frndname")
let cnf = document.getElementById("confirm")
let cnp = document.getElementById("cn-p")
let ok = document.getElementById("Yes")
let no = document.getElementById("No")
let cn_btns = document.getElementsByClassName("cn-btn")
let msg = document.getElementById("Msg-me")

let flag = 0



addfrd.addEventListener("click", function () {
    if (flag == 0) {
        cnp.innerHTML = `Do you want to Add ${n.textContent} as your friend`
        cnf.style.display = "block"

        ok.addEventListener("click", function () {
            addfrd.innerHTML = "Remove Friend"
            addfrd.style.fontSize = "17px"
            removestranger.innerHTML = "Friends ✅"
            removestranger.style.color = "green"
            cnf.style.display = "none"
            msg.style.display="inline-block"
            flag = 1
        })
        no.addEventListener("click", function () {
            cnf.style.display = "none"
            flag = 0
        })
    }

    else if (flag == 1) {
        cnp.innerHTML = `Do you want to Remove ${n.textContent} as your friend`
        cnf.style.display = "block"

        ok.addEventListener("click", function () {
            addfrd.innerHTML = "Add Friend"
            addfrd.style.fontSize = "17px"
            removestranger.innerHTML = "Stranger"
            removestranger.style.color = "red"
            msg.style.display="none"
            flag = 0
        })

        no.addEventListener("click", function () {
            cnf.style.display = "none"
            flag = 1
        })


    }

})
