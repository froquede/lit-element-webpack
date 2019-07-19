import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
	render() {
		return html`
        	<p>Hello World!</p>
        `;
	}
}

customElements.define('my-element', MyElement);

export default MyElement;