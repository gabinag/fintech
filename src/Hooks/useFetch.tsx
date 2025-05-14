import React from 'react';

interface FetchState<T> {  //define o formato do retorno do hook
  data: T | null;     //armazena os dados da resposta
  loading: boolean;     //indica se a requisição está em andamento
  error: string | null;     //armazena mensagens de erro 
}

function useFetch<T>( //o hook aceita dois parâmetros o endpoint da api e as opções para o fetch (method, headers,etc)
  url: RequestInfo | URL, 
  options?: RequestInit,
): FetchState<T> { //estados do hook
  const [data, setData] = React.useState<T | null>(null); 
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options; //atualiza optionsRef.current sempre que options mudar

  React.useEffect(() => {
    const controller = new AbortController();   //Cria um controlador para cancelar requisições
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = (await response.json()) as T;
        if (!signal.aborted) setData(data);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
