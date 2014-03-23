var gui = require('nw.gui');
var menu = new gui.Menu({type: 'menubar'});

menu.append(new gui.MenuItem({
    label: 'File',
    submenu: new gui.Menu()
}));

gui.Window.get().menu = menu;
