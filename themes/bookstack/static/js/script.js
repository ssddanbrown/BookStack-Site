
// Mobile menu

var menuButton = document.getElementById('menu-button');
var menuDropDown = document.querySelector('header div.inner');

menuButton.onclick = function(event) {
    var menuClass = menuDropDown.className;
    var visible = menuClass.indexOf('showing') !== -1;
    if (visible) {
        menuDropDown.className = menuClass.replace('showing', '');
    } else {
        menuDropDown.className += ' showing';
    }
    event.stopPropagation();
};

document.body.onclick = function(event) {
    menuDropDown.className = menuDropDown.className.replace('showing', '');
    event.stopPropagation();
};


// Handle video click to play
var videos = document.querySelectorAll('video');
for (var i = 0; i < videos.length; i++) {
    videos[i].addEventListener('click', videoClick)
}

function videoClick() {
    if (typeof InstallTrigger !== 'undefined') return;
    this.paused ? this.play() : this.pause();
}


// Codemirror Setup

var modeMap = {
  'language-html': 'htmlmixed',
  'language-bash': 'shell',
  'language-js': 'javascript',
  'language-shell': 'bash',
  'language-nginx': 'nginx',
  'language-apache': 'apache',
  'language-php': 'php',
};

var codeBlocks = document.querySelectorAll('pre');
for (var i = 0; i < codeBlocks.length; i++) {
  var block = codeBlocks[i];
  var codeElem = block.querySelector('code');
  if (codeElem === null) continue;

  var langClass = codeElem.className;
  var mode = (typeof modeMap[langClass] !== 'undefined') ? modeMap[langClass] : 'htmlmixed';
  var content = codeElem.textContent.trim();
  CodeMirror(function(cmElem) {
    block.parentNode.replaceChild(cmElem, block);
  }, {
    theme: 'base16-light',
    lineNumbers: true,
    mode: mode,
    readOnly: true,
    value: content
  });
}
