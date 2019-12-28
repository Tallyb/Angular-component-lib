
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';

storiesOf('button', module)
  .add('button', () => ({
    component: ButtonComponent,
    props: {},
  }));
