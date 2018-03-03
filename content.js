if (document.title === "Google"){
    var inputBoxes = document.getElementsByTagName('input');
    var googleLogo = document.getElementById('hplogo');
    inputBoxes[7].value = 'Dank';
    inputBoxes[8].value = 'Memes';
    googleLogo.remove();
    document.body.style.cssText = 
    'background: url(chrome-extension://__MSG_@@extension_id__/media/joseph/google.png)'+
    ' no-repeat center center fixed !important';
}