'use strict';

class MyView extends HTMLElement {
  get route() {
    return this.getAttribute('route') || null;
  }
}

customElements.define('my-view', MyView);
