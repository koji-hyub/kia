import React from 'react';
import Style from './ListItemStyle';
import Text from '../../Components/Text/Text';

const ListItem = Style(APP_SKIN);

function ListItemWrap(props) {
  const { data, label, value } = props;

  return (
    <ListItem>
      <ul>
        {data && data.length > 0 ? (
          data.map((item) => (
            <li key={item.id && item.id}>
              <p className={'label'}>{item.label ? item.label : ''}</p>
              <p className={'value'}>{item.value ? item.value : ''}</p>
            </li>
          ))
        ) : (
          <li>
            <p className={'label'}>{label ? label : 'label'}</p>
            <p className={'value'}>{value ? value : 'value'}</p>
          </li>
        )}
      </ul>
    </ListItem>
  );
}

export default ListItemWrap;
