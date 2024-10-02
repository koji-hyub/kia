import React from 'react';
import Style from './TextBasicStyle';
import Heading from '../../Heading/Heading';
import Text from '../../Text/Text';
import ButtonLink from '../../Button/ButtonLink';
import { IconLink } from '../../../assets/images/common/IconSet';
import Button from '../../Button/Button';

const TextBasic = Style(APP_SKIN);
function TextBasicWrap(props) {
  const { data } = props;
  return (
    <TextBasic>
      {data && data.length > 0 ? (
        <>
          <Heading level={3} title={'Title'} size={'--font-size-4'} bold={'bold'} />
          <Text
            size={'--font-size-7'}
            color={'--Grey-Spectrum-Coll-Grey-40'}
            text={'Sub title(선택)'}
          />
          <div className={'text-box'}>
            <Text size={'--font-size-5'} color={'--Primary-Midnight-Black'} text={'contents'} />
          </div>
        </>
      ) : (
        <>
          <Heading level={3} title={'약관 동의'} size={'--font-size-4'} bold={'bold'} />
          <Text
            size={'--font-size-7'}
            color={'--Grey-Spectrum-Coll-Grey-40'}
            text={
              '세션이 종료되었습니다. <br /> 다시 로그인 하시어 챗봇 서비스를 이용하시기 바랍니다.'
            }
          />
          <ButtonLink
            className={'btn text'}
            text={'약관 보기'}
            iconRight={<IconLink currentColor={'#05141F'} />}
            size={'small'}
            link={'/'}
          />
          <div className={'btn-area'}>
            <Button text={'취소'} className={'btn secondary'} size={'small'} />
            <ButtonLink
              className={'btn primary'}
              text={'로그인 하기'}
              iconRight={<IconLink currentColor={'#fff'} />}
              size={'small'}
              link={'/'}
            />
          </div>
        </>
      )}
    </TextBasic>
  );
}

export default TextBasicWrap;
