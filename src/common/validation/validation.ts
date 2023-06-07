import * as yup from 'yup'

// **** 비밀번호 유효성검사 정규표현식
const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/

// **** yup 유효성검사
export const schema = yup.object({
  writer: yup.string().required('작성자를 입력해주세요.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(regex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
  title: yup.string().required('제목을 입력해주세요.'),
  contents: yup.string().required('내용을 입력해주세요.'),
})

export const schema_edit = yup.object({
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(regex, '영문+숫자+특수문자 조합 8~16자리의 비밀번호를 입력해 주세요.'),
})
