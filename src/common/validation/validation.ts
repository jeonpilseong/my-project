import * as yup from 'yup'

// **** 유효성검사 정규표현식
const emailRegex = /^\w+@\w+\.[a-zA-Z]{2,10}$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/
const nameRegex = /^[ㄱ-ㅎ가-힣A-Za-z\d]{2,10}$/
const priceRegex = /^[0-9]+$/

// **** yup 게시글 등록 유효성검사
export const schema = yup.object({
  writer: yup.string().required('작성자를 입력해주세요.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(passwordRegex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
  title: yup.string().required('제목을 입력해주세요.'),
  contents: yup.string().required('내용을 입력해주세요.'),
})

// **** yup 게시글 수정 유효성검사
export const schema_edit = yup.object({
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(passwordRegex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
})

// **** yup 회원가입 유효성검사
export const signupSchema = yup.object({
  email: yup.string().required('작성자를 입력해주세요.').matches(emailRegex, '올바른 이메일 형식이 아닙니다.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(passwordRegex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
  checkPassword: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  name: yup.string().required('닉네임을 입력해주세요.').matches(nameRegex, '올바른 닉네임이 형식이 아닙니다.(2~10글자'),
})

// **** yup 로그인 유효성검사
export const loginSchema = yup.object({
  email: yup.string().required('작성자를 입력해주세요.').matches(emailRegex, '올바른 이메일 형식이 아닙니다.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(passwordRegex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
})

// **** yup 상품 등록 유효성검사
export const MarketWriteSchema = yup.object({
  name: yup.string().required('상품명을 입력해주세요.'),
  remarks: yup.string().required('한줄 요약을 입력해주세요.'),
  contents: yup.string().notOneOf(['<p><br></p>'], '상품 설명을 입력해 주세요.'),
  price: yup.string().required('가격을 입력해주세요.').matches(priceRegex, '숫자만 입력해 주세요.'),
})

export const MarketWriteSchema_edit = yup.object({})

// **** yup 비밀번호 수정 유효성검사
export const EditPasswordSchema = yup.object({
  currentPassword: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(passwordRegex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
  newPassword: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(passwordRegex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
  CheckPassword: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .oneOf([yup.ref('newPassword')], '비밀번호가 일치하지 않습니다.'),
})
