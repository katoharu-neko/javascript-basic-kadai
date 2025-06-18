const btn = document.getElementById('btn');
const text = document.getElementById('text').innerText;

btn.addEventListener('click', () => {
    document.getElementById('text').innerText = 'ボタンをクリックしました';
})