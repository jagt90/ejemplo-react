import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { selectTesoreria } from '../tesoreriaSelectors';

export const selectGastos = createDraftSafeSelector([selectTesoreria], (tesoreria) => tesoreria.gastos);
