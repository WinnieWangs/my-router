'use strict';

class MyView extends HTMLElement {
  get route() {
    return this.getAttribute('route');
  }
}

customElements.define('my-view', MyView);
