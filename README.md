<div align="center">
  <h1>자유 게시판 & 중고마켓 서비스</h1>
  
  <p>해당 프로잭트는 CRUD 자유 게시판 &</p>
	<p>중고 상품을 구매하고 판매할 수 있는 중고마켓 웹 서비스 입니다.</P>
  
<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [:notebook_with_decorative_cover: Table of Contents](#notebook_with_decorative_cover-table-of-contents)
  - [:star2: About the Project](#star2-about-the-project)
    - [:camera: Main Page](#camera-main-page)
    - [:space_invader: Tech Stack](#space_invader-tech-stack)
    - [:art: Color Reference](#art-color-reference)
  - [:toolbox: 프로젝트 실행](#toolbox-프로젝트-실행)
  - [:eyes: Usage](#eyes-usage)
  - [:compass: Roadmap](#compass-roadmap)
  - [:wave: Contributing](#wave-contributing)
    - [:scroll: Code of Conduct](#scroll-code-of-conduct)
  - [:grey_question: FAQ](#grey_question-faq)
  - [:warning: License](#warning-license)
  - [:handshake: Contact](#handshake-contact)
  - [:gem: Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Main Page

<div align="center"> 
  <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Frontend 기술 스택</summary>
  <ul>
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js v17.0.2</a>
    </br><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js v12.1.0</a>
    </br><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a>
		</br><a href="https://emotion.sh/docs/introduction" target="_blank" rel="noopener noreferrer">Emotion v11.11.0</a>
    </br><a href="https://ant.design//" target="_blank" rel="noopener noreferrer">Ant Desin v5.6.0</a>
		</br><a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">QraphQL v16.6.0</a>
		</br><a href="https://recoiljs.org/ko/" target="_blank" rel="noopener noreferrer">Recoil v0.7.7</a>
		</br><a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>
  </ul>
</details>

<details>
  <summary>사용한 라이브러리</summary>
  <ul>
    <a href="https://www.npmjs.com/package/yup/" target="_blank" rel="noopener noreferrer">yup : 유효성 검사</a>
    </br><a href="https://www.react-hook-form.com//" target="_blank" rel="noopener noreferrer">react-hook-form : 비제어 컴포넌트 제어</a>
    </br><a href="https://www.apollographql.com/docs/react/" target="_blank" rel="noopener noreferrer">apollo-client : GraphQL 세팅</a>
    </br><a href="https://www.npmjs.com/package/@graphql-codegen/core" target="_blank" rel="noopener noreferrer">GraphQL-Codegen : API Response 데이터 Type 지정</a>
    </br><a href="https://www.npmjs.com/package/react-daum-postcode/" target="_blank" rel="noopener noreferrer">react-daum-postcode : 다음 주소 검색</a>
		</br><a href="https://apis.map.kakao.com/web/guide/" target="_blank" rel="noopener noreferrer">kakao-maps-api : 카카오맵</a>
    </br><a href="https://www.npmjs.com/package/react-player" target="_blank" rel="noopener noreferrer">react-player : 비디오 플레이어</a>    
    </br><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">eslint : 협업 시 코드 규칙 정하기</a>
    </br><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">prettier : 코드 formatter</a>
		</br><a href="https://www.npmjs.com/package/react-infinite-scroller" target="_blank" rel="noopener noreferrer">react-infinite-scroller : 무한스크롤</a>
		</br><a href="https://www.npmjs.com/package/apollo-upload-client" target="_blank" rel="noopener noreferrer">apollo-upload-client : 이미지 업로드 url 불러오기</a>
		</br><a href="https://www.npmjs.com/package/react-quill" target="_blank" rel="noopener noreferrer">react-quill : 웹 에디터</a>
		</br><a href="https://developers.portone.io/docs/ko/readme" target="_blank" rel="noopener noreferrer">PortOne : 결제 연동 대행사</a>
  </ul>
</details>

<details>
	<summary>백엔드 API</summary>
	<ul>
		<a href="https://backendonline.codebootcamp.co.kr/graphql" target="_blank" rel="noopener noreferrer">PlayGround : GraphQL API</a>
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

<!-- Getting Started -->

## :toolbox: 프로젝트 실행

터미널 창에 아래 명령어를 순차적으로 실행하시면 됩니다.
</br>명령어 실행 후 여기를 http://localhost:3000 열면 작동하실 겁니다.

```bash
 git clone https://github.com/jeonpilseong/my-project.git
 yarn install
 yarn dev
```

cf) 사용중인 백엔드 서버는 GraphQL API가 localhost:3000 주소에서만 요청 가능하도록 설정되어 있습니다.
</br>따라서 하단에 배포 링크는 GraphQL API 요청이 막혀 데이터를 불러올 수 없으므로 제대로 동작하지 않습니다.
</br>:link:<a href="https://useditems-market.vercel.app/">useditems-market.vercel.app/</a>

<!-- Usage -->

## :eyes: Usage

Use this space to tell a little more about your project and how it can be used. Show additional screenshots, code samples, demos or link to other resources.

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

<!-- Roadmap -->

## :compass: Roadmap

- [x] Todo 1
- [ ] Todo 2

<!-- Contributing -->

## :wave: Contributing

<a href="https://github.com/Louis3797/awesome-readme-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
</a>

Contributions are always welcome!

See `contributing.md` for ways to get started.

<!-- Code of Conduct -->

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/Louis3797/awesome-readme-template/blob/master/CODE_OF_CONDUCT.md)

<!-- FAQ -->

## :grey_question: FAQ

- Question 1

  - Answer 1

- Question 2

  - Answer 2

<!-- License -->

## :warning: License

Distributed under the no License. See LICENSE.txt for more information.

<!-- Contact -->

## :handshake: Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/Louis3797/awesome-readme-template](https://github.com/Louis3797/awesome-readme-template)

<!-- Acknowledgments -->

## :gem: Acknowledgements

Use this section to mention useful resources and libraries that you have used in your projects.

- [Shields.io](https://shields.io/)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)
- [Readme Template](https://github.com/othneildrew/Best-README-Template)
