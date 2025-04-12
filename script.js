const emoji=document.getElementById('emoji');
const moodselector=document.getElementById('moodselector');

const moods={
    happy: {emoji: "🙂", color: "yellow"},
    angry: {emoji: "😡", color: "red"},
    sad: {emoji: "😥", color: "lightblue"},
    excited: {emoji: "😍", color: "orange"},
    calm: {emoji: "😌", color: "lightgreen"}
};
moodselector.addEventListener('change',()=>{
    const mood=moodselector.value;
    emoji.textContent=moods[mood].emoji;
    document.body.style.backgroundColor=moods[mood].color;
})