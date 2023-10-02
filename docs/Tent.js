TentController = {
    createTent(word, count) {
        hasWord = false;
        
        for(let i of GlobalController.getURLParams()) {
            if(i.name == word) {
                hasWord = true;

                _t = this.Tent(word, i.value, count);
                _t.set();
            }
        }
        return hasWord;
    },

    Tent(word, title, len) { return {
        root: word, title: title, len: len,

        set() {
            let _root = document.getElementById(this.root);
            _root.innerHTML = "";

            _root.innerHTML += 
            `<h2 id="${this.root}.title">${this.title}</h2>`;

            for(let i = 0; i < this.len; i++) {
                _root.innerHTML +=
                `<div class="indent box" id="${this.root}[${i}]"></div>`;
            }
        }
    }; }
};