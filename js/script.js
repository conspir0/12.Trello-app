'use strict';

function Button(text){
    this.text = text || 'Write Button value';
}

Button.prototype = {
    create: function() {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        this.element.addEventListener('click', function(){
            alert(self.text);
        });
        document.body.appendChild(this.element);
    }
}

var btn1 = new Button('Click me!');
btn1.create();