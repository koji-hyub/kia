import React from 'react';
import Style from './ListItemStyle';

const ListItem = Style(APP_SKIN);

function ListItemWrap({ tableItem }) {
  return (
    <ListItem className={'qna-wrap'}>
      <section className="bored-list-wrap">
        <ul className="bored-list">
          <li className="th-head">
            {/* 헤더 부분 렌더링 */}
            {tableItem.headerItem.map((item, index) => (
              <div key={index} className={`${item.class ? item.class : ''}`}>
                {item.name}
              </div>
            ))}
          </li>
          {/* 바디 부분 렌더링 */}
          {tableItem.contentItems && tableItem.contentItems.length > 0 ? (
            tableItem.contentItems.map((item) => (
              <li key={item.id} className="t-body">
                {tableItem.headerItem.map((column, columnIndex) => (
                  <div key={columnIndex} className={`${column.class ? column.class : ''}`}>
                    {item.columns[columnIndex].content}
                  </div>
                ))}
              </li>
            ))
          ) : (
            <li className="t-body">
              <div className="no-content">내용없음</div>
            </li>
          )}
        </ul>
      </section>
    </ListItem>
  );
}

export default ListItemWrap;
