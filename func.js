document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#8A2BE2'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
