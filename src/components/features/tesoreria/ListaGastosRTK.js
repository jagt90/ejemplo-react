import React, { useEffect, useState } from 'react';

import { useGetPostsQuery } from '../../../services/placeholder/posts/postsServiceRTK';

import PageLoader from '../../common/PageLoader';

const ListaGastosRTK = () => {
  // Se define estado local solo porque se requieren filtrar los primeros 10 registros de la informacion que proviene de useGetPostsQuery
  // De lo contrario se puede omitir y utilizar solamente data directamente
  const [gastos, setGastos] = useState([]);
  const { data, isLoading, isError } = useGetPostsQuery();

  useEffect(() => {
    setGastos(data ? data.slice(0, 10) : []);
  }, [data]);

  if (isLoading) return <PageLoader />;

  return (
    <>
      <div>ListaGastos</div>
      {isError ? (
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

export default ListaGastosRTK;
