class SWLSHMLElement extends HTMLElement {
    connectedCallback() {
        window.requestAnimationFrame(() => {
            let result = SHML.parseMarkup(this.innerHTML);
            for(let key of result.getProperties())
                this.dataset[key[0].toString().replace(/Symbol\((.*)\)/, '$1')] = key[1];
            this.innerHTML = result.toHTML();
        });
    }
}

window.customElements.define('shml-region', SWLSHMLElement);