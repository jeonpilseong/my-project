import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'

import MySideUI from './MySidebar.presenter'
import { isClickMySideState } from '@/common/stores'
import { FETCH_USER_LOGGED_IN, UPDATE_USER_INPUT } from './MySidebar.queries'
import { IMutation, IMutationUpdateUserArgs, IMutationUploadFileArgs, IQuery } from '@/common/types/generated/types'
import { UPLOAD_FILE } from '@/components/features/board/write/BoardWrite.queries'
import { FETCH_USEDITEMS } from '@/components/features/market/list/MarketList.queries'
import { IUpdateUserInputType } from './MySidebar.types'

export default function MySide() {
  const router = useRouter()

  // **** 프로필 이름 수정 상태값
  const [name, setName] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  // **** 이미지 상태값
  const [imageUrl, setImageUrl] = useState('')
  const [file, setFile] = useState<File>()
  const [fileUrl, setFileUrl] = useState('')

  // **** 마이페이지 - 사이드 메뉴 상태값
  const [isClickMySide, setIsClickMySide] = useRecoilState(isClickMySideState)

  // **** 태그 저장
  const fileRef = useRef<HTMLInputElement>(null)

  // **** grahpql api 요청
  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE)
  const [updateUser] = useMutation<Pick<IMutation, 'updateUser'>, IMutationUpdateUserArgs>(UPDATE_USER_INPUT)
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

  // **** 프로필 이름 수정 클릭
  const onClickEdit = () => setIsEdit(true)

  // **** 프로필 이름 수정
  const onChageName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)

  // **** 수정된 프로필 이름 저장
  const onClickChangeBtn = async () => {
    const updateUserInput: IUpdateUserInputType = {}
    if (name) {
      updateUserInput.name = name
      await updateUser({
        variables: {
          updateUserInput,
        },
      })
    }
    setIsEdit(false)
  }

  // **** 이미지 임시 업로드
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0]
    if (!file) return

    // ** 임시 이미지 url 생성
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = event => {
      if (typeof event.target?.result === 'string') {
        setImageUrl(event.target?.result)
        setFile(file)
      }
    }
  }

  // **** 이미지 업로드
  useEffect(() => {
    // ** uploadFile
    const uploadFunction = async (file: any) => {
      const resultFile = await uploadFile({ variables: { file } })
      setFileUrl(resultFile.data?.uploadFile.url ?? '')
    }

    // ** file 업로드 시 uploadFile 함수 실행
    if (file) uploadFunction(file)
  }, [file])

  // **** 이미지 업데이트
  useEffect(() => {
    // ** updateUser
    const updateFunction = async (fileUrl: string) => {
      await updateUser({
        variables: {
          updateUserInput: {
            picture: fileUrl,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      })
    }

    // ** fileUrl 생성 시 updateUser 함수 실행
    if (fileUrl) updateFunction(fileUrl)
  }, [fileUrl])

  // **** 이미지 버튼 클릭 시 input 태그 클릭됨
  const onClickImage = () => {
    fileRef.current?.click()
  }

  // **** 버튼 페이지 이동
  const onClickmyBtn = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === 'myBasket') {
      router.push('/market/myPage/myBasket', undefined, { scroll: false })
      setIsClickMySide([true, false, false])
    }
    if (event.currentTarget.id === 'myOrder') {
      router.push('/market/myPage/myOrder', undefined, { scroll: false })
      setIsClickMySide([false, true, false])
    }
    if (event.currentTarget.id === 'myProfile') {
      router.push('/market/myPage/myProfile', undefined, { scroll: false })
      setIsClickMySide([false, false, true])
    }
  }

  return (
    <MySideUI
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
      imageUrl={imageUrl}
      isClickMySide={isClickMySide}
      UserData={UserData}
      onClickmyBtn={onClickmyBtn}
      onClickEdit={onClickEdit}
      onClickChangeBtn={onClickChangeBtn}
      onChageName={onChageName}
      isEdit={isEdit}
    />
  )
}
