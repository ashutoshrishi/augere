var gui = require('nw.gui'),
    menu = new gui.Menu({type: 'menubar'}),
    stage = require('stage.js'),
    se = require('speakeasy-nlp');

// jQuery
global.$ = $;



/* Stage */
stage.initArea(document.getElementById('stage'));
global.stage = stage;


function NLP (arr) {
    var last = arr[arr.length - 2];


    var noun = se.classify(last).nouns.join(' ');
    stage.invokeBox('google', {text: noun,
                                   colorID: 'red',
                                   timeout: 20});
    stage.invokeBox('define', {text: noun,
                              colorID: '#369',
                              timeout: 20});
}

/* FRONTEND */

tinymce.init({
    selector: "div#editor",
    skin: 'clean',
    plugins: [
        ["autolink link image lists hr anchor spellchecker"],
        ["searchreplace wordcount visualblocks visualchars code nonbreaking"],
        ["template paste"]
    ],
    add_unload_trigger: false,
    schema: "html5",
    inline: false,
    fontsize_formats: "8pt 9pt 10pt 11pt 12pt 26pt 36pt",
    width: 640,
    toolbar: "styleselect | fontsizeselect | bold italic underline | bullist numlist | link | image | code | spellchecker | searchreplace",
    statusbar: false,
    menubar: false,
    setup : function(ed)
    {

        ed.on('init', function()
              {
                  this.getDoc().body.style.fontSize = '16px';
                  this.getDoc().body.style.fontFamily = 'Droid Sans';
              });
        ed.on('keyup', function (e) {
            if (e.keyCode === 190) {
                var content = ed.getContent({format: 'text'});
                window.NLP(content.split('.'));
            }
        });
    }

});

// var tw = require('plugins/twitterbox');
// tw.build({text: 'twitter'});

/* Search invokes */
(function () {
    $('#search-box').keyup(function (e) {
        if (e.keyCode == 13) {
            $(this).trigger('enterKey');
        }
    })

    $('#search-box').bind('enterKey', function(e) {
        var invoke_re = /^(\w+):\s?([\w:\s]+)/;
        var match;

        if (invoke_re.test(String(this.value))) {
            match = (this.value).match(invoke_re);
            stage.invokeBox(match[1], {
                text: match[2],
                colorID: '#369'
            });
        }
    });
})();
