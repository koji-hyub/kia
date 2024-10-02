import React from 'react';

import Style from './ListItemLinkStyle';
import { Link } from 'react-router-dom';
import { IconArrow } from '../../assets/images/common/IconSet';

const ListItemLink = Style(APP_SKIN);
function ListItemLinkWrap(props) {
  const { data, label, value, txt, link } = props;
  return (
    <ListItemLink>
      {data && data.length > 0 ? (
        data.map((item) => (
          <Link to={item.link ? item.link : '/'}>
            <div className={'title'}>
              <p className={'label'}>{item.label ? item.label : 'label'}</p>
              {item.value ? (
                <p className={'value'}>{item.value}</p>
              ) : (
                <p className={'value'}>
                  <IconArrow width={16} height={16} />
                </p>
              )}
              {/*<p className={'value'}>{item.value ? item.value : 'value'}</p>*/}
            </div>
            <p className={'sub-txt'}>{item.txt ? item.txt : 'value'}</p>
          </Link>
        ))
      ) : (
        <Link to={link ? link : '/'}>
          <div className={'title'}>
            <p className={'label'}>{label ? label : 'label'}</p>
            <p className={'value'}>{value ? value : 'value'}</p>
          </div>
          <p className={'sub-txt'}>{txt ? txt : '서브 텍스트'}</p>
        </Link>
      )}
    </ListItemLink>
  );
}

export default ListItemLinkWrap;
