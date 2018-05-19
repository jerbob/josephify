if (document.title === "Google") {
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
else if (document.title.endsWith('Google Search')) {
    var smallLogo = document.getElementsByTagName('img')[0];
    smallLogo.src = chrome.extension.getURL('media/joseph/google_small.png');
    smallLogo.height = 75;
    smallLogo.width = 125;
}