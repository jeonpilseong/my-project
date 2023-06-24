import { Controller } from 'react-hook-form'

import * as S from './MarketWrite.styles'
import { Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import KakaoMap from '@/components/common/kakaoMap/kakaoMap'
import { useScroll } from '@/common/hooks/useScroll'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { IMarketWriteUIProps } from './MarketWrite.types'

export default function MarketWriteUI(props: IMarketWriteUIProps) {
  // **** 커스텀 훅
  const { onClickMoveToPage } = useMoveToPage()
  const { scrollRef } = useScroll()

  // **** 버튼
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  // **** 카카오 맵
  KakaoMap(props.address ?? '')

  return (
    <S.Container>
      <S.Wrapper ref={scrollRef}>
        <S.Title>상품 {props.isEditMarket ? '수정' : '등록'}하기</S.Title>
        <S.Label>상품명</S.Label>
        <Controller
          name="name"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => (
            <S.BasicInput
              placeholder="상품명을 입력해 주세요."
              defaultValue={props.UseditemData?.fetchUseditem.name ?? ''}
              key={props.UseditemData?.fetchUseditem.name}
              {...field}
            />
          )}
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>

        <S.Label>한줄 요약</S.Label>
        <Controller
          name="remarks"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => (
            <S.BasicInput
              placeholder="한줄요약을 입력해 주세요."
              defaultValue={props.UseditemData?.fetchUseditem.remarks ?? ''}
              key={props.UseditemData?.fetchUseditem.remarks}
              {...field}
            />
          )}
        />
        <S.Error>{props.formState.errors.remarks?.message}</S.Error>

        <S.Label>상품 설명</S.Label>
        <Controller
          name="contents"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => (
            <S.TextEditor
              defaultValue={props.UseditemData?.fetchUseditem.contents}
              key={props.UseditemData?.fetchUseditem.contents}
              {...field}
            />
          )}
        />
        <S.Error>{props.formState.errors.contents?.message}</S.Error>

        <S.Label style={{ marginTop: '4rem' }}>가격</S.Label>
        <Controller
          name="price"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => (
            <S.BasicInput
              defaultValue={props.UseditemData?.fetchUseditem.price ?? 0}
              key={props.UseditemData?.fetchUseditem.price}
              placeholder="가격을 입력해 주세요."
              {...field}
            />
          )}
        />
        <S.Error>{props.formState.errors.price?.message}</S.Error>

        <S.ImgWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.ImgUploadBtn
            fileList={props.fileList}
            onPreview={props.handlePreview}
            onChange={props.handleChange}
            listType="picture-circle">
            {props.fileList.length >= 8 ? null : uploadButton}
          </S.ImgUploadBtn>
          <Modal open={props.previewOpen} title={props.previewTitle} footer={null} onCancel={props.handleCancel}>
            <img style={{ width: '100%' }} src={props.previewImage} />
          </Modal>
        </S.ImgWrapper>

        <S.Label>거래 주소</S.Label>
        <S.ZipcodeWrapper>
          <S.ZipcodeInput
            readOnly
            value={
              props.isClickAddress ? props.zipcode : props.UseditemData?.fetchUseditem.useditemAddress?.zipcode ?? ''
            }
          />
          <S.ZicodeBtn onClick={props.onclickAddress}>우편번호 검색</S.ZicodeBtn>
        </S.ZipcodeWrapper>
        <S.AddressInput
          readOnly
          value={
            props.isClickAddress ? props.address : props.UseditemData?.fetchUseditem.useditemAddress?.address ?? ''
          }
        />
        <Controller
          name="addressDetail"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => (
            <S.AddressInput
              defaultValue={props.UseditemData?.fetchUseditem.useditemAddress?.addressDetail ?? ''}
              key={props.UseditemData?.fetchUseditem.useditemAddress?.addressDetail}
              {...field}
            />
          )}
        />

        <S.Label>거래 위치</S.Label>
        {/* window.kakao 생성 */}
        <div id="map" style={{ height: 400 }}></div>

        <S.BtnWrapper>
          {props.isEditMarket ? <S.SubmitBtn onClick={onClickMoveToPage('/')}>목록으로</S.SubmitBtn> : ''}
          <S.SubmitBtn onClick={props.isEditMarket ? props.onClickUpdate : props.onClickSubmit}>
            {props.isEditMarket ? '수정' : '등록'}하기
          </S.SubmitBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
