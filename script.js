const voeuxList = [
    "Que cette année soit pleine de succès 🎉",
    "Bonne santé et prospérité pour vous ! 🌟",
    "Plein de bonheur et d’amour en 2025 ❤️",
    "Paix et sérénité pour vous et vos proches 🙏",
    "Que vos rêves deviennent réalité ! ✨"
];

function startMagic() {
    generateBubbles();
    generateVoeux();
    setTimeout(()=>{
        document.getElementById("backgroundMusic").play();
    },3000)
}

function getRandomColor() {
    const colors = ["#FF5733", "#33FF57", "#3375FF", "#FF33A6", "#FFD433"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateBubbles() {
    setInterval(() => {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.backgroundColor = getRandomColor();
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(bubble);
        setTimeout(() => bubble.remove(), 5000);
    }, 200);
}

function generateVoeux() {
    setInterval(() => {
        const voeuxBubble = document.createElement("div");
        voeuxBubble.classList.add("voeux-bubble");
        voeuxBubble.textContent = voeuxList[Math.floor(Math.random() * voeuxList.length)];
        voeuxBubble.style.left = Math.random() * 100 + "vw";
        voeuxBubble.style.animationDuration = Math.random() * 3 + 4 + "s";
        document.body.appendChild(voeuxBubble);
        setTimeout(() => voeuxBubble.remove(), 7000);
    }, 3000);
}