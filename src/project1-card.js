import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "@prettywebcomponents/band-card/src/band-card.js";
import "@prettywebcomponents/videogame-card2/src/videogame-card.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class Project1Card extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--project1-card-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
    <videogame-card><slot>
        <ul><li>This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2.</li>
        <li>The video is called 'Meet the Pyro'</li></ul></slot>
    </videogame-card>

    <videogame-card accent-color="cyan" toptext="Tf2 best game">
        <ul><li>I'm a creep, i'm a weirdo</li>
        <li>What the hell am I doing here, I don't belong here</li></ul>
    </videogame-card>

    <videogame-card name="Cbum" toptext="Cbum" picture="https://www.thebarbell.com/wp-content/uploads/2023/01/Cbum-2022-Olympia.png">      
        <ul><li>This is a screenshot from a 3D rendered animation posted to Youtube by Valve Corporation to promote the video-game Team Fortress 2.</li>
        <li>The video is called 'Meet the Pyro'</li></ul>
    </videogame-card>
    
    <videogame-card name="Overwatch 2" accent-color="orange">      
        <ul><li>I am actually masters in Ow2 on tank and support that's kinda poggers</li></ul>
    </videogame-card>

    <videogame-card detailstext="CLICK ME PLEASE CLICK ME PLEASE">
        <ul><li>Booble gooble smoogle</li></ul>
    </videogame-card>

    <band-card topText="memes" bottomText="memes but bottom" light-background><div>Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div Div</div></band-card>
    
    <band-card title="Memes haha"></band-card>

    <band-card topText="Squonk" bottomText="Squonk" title="Squonk" imageLink="https://64.media.tumblr.com/c1a3936324916293dfc0f0699b76eeed/tumblr_inline_oigj15tevk1rkapbx_1280.jpg"><slot>Squonk moment any squonkers in the chat</slot></band-card>
    
    <band-card showInformation="I hate React (not really)"></band-card>
    
    <band-card><div>Shoutout Emo night</div></band-card>
    `;
  }
}
customElements.define('project1-card', Project1Card);