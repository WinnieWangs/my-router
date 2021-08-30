'use strict';

class MyRouter extends HTMLElement {
  constructor() {
    super();

    this._onChanged = this._onChanged.bind(this);
  }
  connectedCallback() {
    window.addEventListener('popstate', this._onChanged);
    this._onChanged();
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this._onChanged);
  }

  _onChanged() {}
}

customElements.define('my-router', MyRouter);
