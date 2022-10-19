class SHMLMarkdownElement extends HTMLElement {
    static customTokens;
    connectedCallback() {
        window.requestAnimationFrame(() => {
            let result = SHML.parseMarkup(this.textContent ?? '', SHMLMarkdownElement.customTokens);
            Object.assign(this.dataset,Object.fromEntries(result.properties.entries()));
            this.innerHTML = result.toString();
        });
    }
}

window.customElements.define('shml-region', SHMLMarkdownElement);
