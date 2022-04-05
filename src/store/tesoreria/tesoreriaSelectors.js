import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { selectRoot } from '../rootSelectors';

export const selectTesoreria = createDraftSafeSelector([selectRoot], (state) => state.tesoreria);
