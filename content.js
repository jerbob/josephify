if (document.title === "Google"){
    var inputBoxes = document.getElementsByTagName('input');
    var googleLogo = document.getElementById('hplogo');
    var googleURL = chrome.extension.getURL('media/joseph/google.png');
    inputBoxes[7].value = 'Dank';
    inputBoxes[8].value = 'Memes';
    googleLogo.remove();
    document.body.style.cssText = 
    'background: url('+ googleURL +')'+
    ' no-repeat center center fixed !important';
}