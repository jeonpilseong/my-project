<div align="center">
  <h1>자유 게시판 & 중고마켓 서비스</h1>
  
  <p>해당 프로젝트는 GraphQL API를 활용해서 만든  CRUD 자유 게시판 & 중고마켓 웹 서비스 입니다.</p>
	
  
<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [:notebook_with_decorative_cover: Table of Contents](#notebook_with_decorative_cover-table-of-contents)
  - [:star2: About the Project](#star2-about-the-project)
    - [:camera: Main Page](#camera-main-page)
    - [:space_invader: Tech Stack](#space_invader-tech-stack)
    - [:art: Color Reference](#art-color-reference)
  - [:toolbox: 프로젝트 실행](#toolbox-프로젝트-실행)
  - [:eyes: 상품 등록 페이지](#eyes-상품-등록-페이지)
  - [:eyes: 포인트 충전하기](#eyes-포인트-충전하기)
  - [:eyes: 상품 구매하기](#eyes-상품-구매하기)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Main Page

![메인화면](https://github.com/jeonpilseong/my-project/blob/main/public/readme/메인페이지.webp)

<details> 
  <summary><strong>중고 상품 목록 페이지</strong></summary>
  <ol>
    <li>무한스크롤을 이용해 상품 목록들을 보여줍니다.</li>
    <li>유저가 많이 찜한 상품 순서로 베스트 상품이 보여집니다.</li>
    <li>검색창에 상품 제목을 검색할 수 있습니다.</li>
    <li>상품 조회 시 오른쪽 사이드에 최근에 본 상품이 담겨집니다.</li>
  </ol>
</details>

<details>
  <summary><strong>자유게시판</strong></summary>
  <ol>
    <li>페이지네이션을 이용해 자유 게시판 목록들을 보여줍니다.</li>
    <li>검색창에 게시글 제목과 날짜를 검색할 수 있습니다.</li>
  </ol>
</details>
</br>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Frontend 기술 스택</summary>
  <ul>
    <a href="https://reactjs.org/" >React.js v17.0.2</a>
    </br><a href="https://nextjs.org/" >Next.js v12.1.0</a>
    </br><a href="https://www.typescriptlang.org/" >Typescript</a>
		</br><a href="https://emotion.sh/docs/introduction" >Emotion v11.11.0</a>
    </br><a href="https://ant.design//" >Ant Desin v5.6.0</a>
		</br><a href="https://graphql.org/" >QraphQL v16.6.0</a>
		</br><a href="https://recoiljs.org/ko/" >Recoil v0.7.7</a>
		</br><a href="https://vercel.com/" >Vercel</a>
  </ul>
</details>

<details>
  <summary>사용한 라이브러리</summary>
  <ul>
    <a href="https://www.npmjs.com/package/yup/" >yup : 유효성 검사</a>
    </br><a href="https://www.react-hook-form.com//" >react-hook-form : 비제어 컴포넌트 제어</a>
    </br><a href="https://www.apollographql.com/docs/react/" >apollo-client : GraphQL 세팅</a>
    </br><a href="https://www.npmjs.com/package/@graphql-codegen/core" >GraphQL-Codegen : API 응답 데이터 타입</a>
    </br><a href="https://www.npmjs.com/package/react-daum-postcode/" >react-daum-postcode : 다음 주소 검색</a>
		</br><a href="https://apis.map.kakao.com/web/guide/" >kakao-maps-api : 카카오맵</a>
    </br><a href="https://www.npmjs.com/package/react-player" >react-player : 비디오 플레이어</a>    
    </br><a href="https://eslint.org/" >eslint : 협업 시 코드 규칙 정하기</a>
    </br><a href="https://prettier.io/" >prettier : 코드 formatter</a>
		</br><a href="https://www.npmjs.com/package/react-infinite-scroller" >react-infinite-scroller : 무한스크롤</a>
		</br><a href="https://www.npmjs.com/package/apollo-upload-client" >apollo-upload-client : 이미지 업로드 url 불러오기</a>
		</br><a href="https://www.npmjs.com/package/react-quill" >react-quill : 웹 에디터</a>
		</br><a href="https://developers.portone.io/docs/ko/readme" >PortOne : 결제 연동 대행사</a>
  </ul>
</details>

<details>
	<summary>백엔드 API</summary>
	<ul>
		<a href="https://backendonline.codebootcamp.co.kr/graphql" >PlayGround : GraphQL API</a>
	</ul>
</details>
</br>

<!-- Color Reference -->

### :art: Color Reference

| Color       | Hex                                                              |
| ----------- | ---------------------------------------------------------------- |
| --gray-1    | ![#7e7872](https://via.placeholder.com/10/e6f4ff?text=+) #7e7872 |
| --gray-2    | ![#a8a8a8](https://via.placeholder.com/10/a8a8a8?text=+) #a8a8a8 |
| --gray-3    | ![#bdbdbd](https://via.placeholder.com/10/bdbdbd?text=+) #bdbdbd |
| --gray-4    | ![#d9d9d9](https://via.placeholder.com/10/d9d9d9?text=+) #d9d9d9 |
| --error-red | ![#f54040](https://via.placeholder.com/10/f54040?text=+) #f54040 |
| --blue-1    | ![#0072e1](https://via.placeholder.com/10/0072e1?text=+) #0072e1 |
| --blue-2    | ![#67a6ff](https://via.placeholder.com/10/67a6ff?text=+) #67a6ff |
| --blue-3    | ![#e6f4ff](https://via.placeholder.com/10/e6f4ff?text=+) #e6f4ff |

</br>

<!-- Getting Started -->

## :toolbox: 프로젝트 실행

터미널 창에 아래 명령어를 순차적으로 실행하시면 됩니다.
</br>명령어 실행 후 여기를 http://localhost:3000 열면 작동하실 겁니다.

```bash
 git clone https://github.com/jeonpilseong/my-project.git
 yarn install
 yarn dev
```

<p></p>현재 백엔드 서버는 GraphQL API가 localhost:3000 주소에서만 요청 가능하도록 설정되어 있습니다.
</br>따라서 하단의 배포 링크는 GraphQL API 요청이 막혀 데이터를 불러오지 못하기에 로컬에서만 프로젝트를 볼 수 있습니다.
</br>:link:<a href="https://useditems-market.vercel.app/">useditems-market.vercel.app/</a>
</br>
</br>

<!-- Features -->

## :eyes: 상품 등록 페이지

![상품등록](https://github.com/jeonpilseong/my-project/blob/main/public/readme/상품등록페이지.webp)

<details>
  <summary><strong>상품 등록 페이지</strong></summary>
  <ol>
    <li>로그인한 뒤 상단에 상품 등록 버튼을 누르면 상품 등록 페이지로 이동합니다.</li>
    <li>상품내용을 작성할 때 웹 에디터를 이용해 글씨 크기와 폰트를 바꿀 수 있습니다.</li>
    <li>사진 첨부 시 여러 사진을 첨부할 수 있습니다.</li>
    <li>다음 주소창에 주소를 검색한 뒤 카카오 맵으로 해당 주소의 위치를 보여줄 수 있습니다.</li>
  </ol>
</details>
</br>

## :eyes: 포인트 충전하기

![포인트충전](https://github.com/jeonpilseong/my-project/blob/main/public/readme/포인트충전.gif)

<details>
  <summary><strong>포인트 충전하기</strong></summary>
  <ol>
    <li>드롭다운으로 충전할 포인트를 선택합니다.</li>
    <li>카카오페이로 충전을 마치면 상단 프로필에서 충전 포인트를 확인할 수 있습니다.</li>
  </ol>
</details>
</br>

## :eyes: 상품 구매하기

![상품구매](https://github.com/jeonpilseong/my-project/blob/main/public/readme/상품구매.webp)

<details>
  <summary><strong>상품 구매하기</strong></summary>
  <ol>
    <li>충전된 포인트로 상품을 구매할 수 있습니다.</li>
    <li>상품 구매 시 마이페이지에서 구매 목록을 볼 수 있습니다.</li>
  </ol>
</details>
</br>
