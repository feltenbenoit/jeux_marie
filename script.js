yesBtn = document.getElementById('yes-button');

let countHover = 0;

yesBtn.addEventListener('mouseover', function() {
    let currentTop = parseFloat(yesBtn.style.top) || 0;
    let currentLeft = parseFloat(yesBtn.style.left) || 0;
    if (countHover < 5) {
        yesBtn.style.position = 'absolute';
        yesBtn.style.top = Math.random() * 90 + '%';
        yesBtn.style.left = Math.random() * 70 + '%';
        while (Math.abs(parseFloat(yesBtn.style.top) - currentTop) < 25 && Math.abs(parseFloat(yesBtn.style.left) - currentLeft) < 25) {
            yesBtn.style.top = Math.random() * 90 + '%';
            yesBtn.style.left = Math.random() * 70 + '%';
        }
        countHover++;
    }
    else {
        yesBtn.style.display = 'none';
        document.getElementById('end-message').style.display = 'block';
    }
});