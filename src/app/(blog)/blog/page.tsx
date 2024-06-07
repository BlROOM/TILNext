// "use client";
// import { useSearchParams } from "next/navigation";

type BlogPage = {
  params: {
    blogId: string;
  };
  // searchParams: {
  //   lang: string;
  //   page: string;
  // };
};

export default function BlogPage(params: BlogPage) {
  // 쿼리스트링을 가져오는방법 'use client' 에서 useSearchParams 훅을 사용
  // 서버 컴포넌트에섣params라는 인자를 받아 타입설정후 searchParams 값을 객체구조분해해서 받아옴
  // 만약 동적 라우트를 통해 [] 대괄호로 폴더를 설정했다면
  // 폴더이름의 들어간 이름을 통해 params로 받을 수 있다.
  // const params = useSearchParams();
  // console.log(params.get("lang"), "params");
  // console.log(params.get("page"), "params");
  const { blogId } = params.params;
  console.log(blogId, "params");
  return (
    <>
      <h1>Blog Detail page Component : {blogId}</h1>
    </>
  );
}
