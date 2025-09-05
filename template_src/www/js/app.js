document.addEventListener('deviceready', function() {
    console.log('Aviator App Ready!');
    var btn = document.getElementById('start');
    if(btn){
        btn.addEventListener('click', () => {
            alert('Aviator Game Starting...');
            // You can add game start logic here
        });
    }
});
