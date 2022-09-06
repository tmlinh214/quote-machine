function animation(){
    document.getElementById('quote-text').classList.add('animation-text')
    document.getElementById('author-text').classList.add('animation-text')
    document.getElementById('btn').classList.add('animation-button')
    document.body.classList.add('animation-background')
}
function removeAnimation(){
    document.getElementById('quote-text').classList.remove('animation-text')
    document.getElementById('author-text').classList.remove('animation-text')
    document.getElementById('btn').classList.remove('animation-button')
    document.body.classList.remove('animation-background')
}

export {animation,removeAnimation}