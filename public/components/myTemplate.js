// src/components/myTemplate.js
import { html, render } from '/modules/lit-html/lit-html.js';


export const myTemplate = (name) => html`
  <div>
    <h1>Hello, ${name}!</h1>
    <p>This is rendered using lit-html.</p>
  </div>
`;
