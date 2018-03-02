chrome.browserAction.setIcon({
    path : "media/joseph/icon.png"
});
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://cdn.discordapp.com/attachments/366673702533988363/419261314540765184/unknown.png';
}