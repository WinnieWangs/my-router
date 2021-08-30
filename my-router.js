'use strict';

class MyRouter extends HTMLElement {
  constructor() {
    super();

    this._onChanged = this._onChanged.bind(this);
    this._createRoute = this._createRoute.bind(this);
    this._createRoutes = this._createRoutes.bind(this);
    this._clearRoutes = this._clearRoutes.bind(this);

    this._routes = new Map();
  }
  connectedCallback() {
    window.addEventListener('popstate', this._onChanged);
    this._clearRoutes();
    this._createRoutes();
    this._onChanged();
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this._onChanged);
  }

  _onChanged() {}

  _clearRoutes() {
    this._routes.clear();
  }

  _createRoutes() {
    for (let view of document.querySelectorAll('my-view')) {
      if (!view.route) continue;

      this._createRoute(view.route, view);
    }
  }

  _createRoute(route, view) {
    if (this._routes.has(route)) {
      return console.warn(`Route already exists: ${route}`);
    }

    this._routes.set(route, view);
  }
}

customElements.define('my-router', MyRouter);
