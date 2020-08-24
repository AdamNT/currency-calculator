/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'home';

export default defineMessages({
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Hello World!',
  },
});
