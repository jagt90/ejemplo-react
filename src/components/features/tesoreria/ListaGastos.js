import React from 'react';

import useAdsisService from '../../../hooks/useAdsisService';
import { fetchGastos } from '../../../store/tesoreria/gastos/gastosReducer';
import { selectGastos } from '../../../store/tesoreria/gastos/gastosSelectors';
import PageLoader from '../../common/PageLoader';

const ListaGastos = () => {
  const payload = {
    selector: selectGastos,
    fetchService: fetchGastos,
    // fetchParams: { FecAlta: '2022-01-01', FecAltaFin: '2022-03-01', Grupo_Id: '1' },
    fetchParams: {},
  };

  const { data: gastos, loading, failed } = useAdsisService(payload);

  if (loading) return <PageLoader />;

  return (
    <>
      <div>ListaGastos</div>
      {failed ? (
        <div>
          <p>Oops no hay informacion para mostrar</p>
        </div>
      ) : (
        <ul>
          {gastos.map((gasto) => {
            const { id, title } = gasto;

            return (
              <li key={`movimiento-${id}`}>
                {id} {title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ListaGastos;
