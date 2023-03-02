import { html } from 'lit';
import '../src/project1-card.js';

export default {
  title: 'Project1Card',
  component: 'project1-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project1-card
      style="--project1-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project1-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
