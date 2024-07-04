export const fetchPokemonDetail = async (id: string) => {
  // const [error, setError] = useState<string | null>(null);
  // useState훅을 비동기 함수 안에서 사용할 수 없다!
  // 이 대신 컴포넌트 레벨에서 에러 상태를 관리하자

  const apiUrl = "http://localhost:3000";
  //SSR이라 로컬호스트를 모르니까 알려주기
  //https로 써놓고 왜 안 되는지 시간 살살 녹이기~~~~

  const response = await fetch(`${apiUrl}/api/pokemons/${id}`);
  //api > pokemons > route.ts를 호출한다는 소리..일걸?

  return response.json();
};
