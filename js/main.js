var gui = require('nw.gui');
var menu = new gui.Menu({type: 'menubar'});
var stage = require('stage.js');

// jQuery
global.$ = $;

menu.append(new gui.MenuItem({
    label: 'File',
    submenu: new gui.Menu()
}));

gui.Window.get().menu = menu;

/* Stage */
stage.initArea(document.getElementById('stage'));

var imagebox = require("plugins/images")();
console.log(imagebox);

stage.appendBox(imagebox);
