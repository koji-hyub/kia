import Style from './TableStyle';

const Table = Style(APP_SKIN);

function TableWrap({ tableItem, scroll }) {
  // 테이블 헤더와 바디의 속성 이름 추출
  const objHeader =
    tableItem && tableItem.length > 0 ? Object.keys(tableItem[0]?.header || {}) : [];

  const bodyContent =
    tableItem && tableItem.length > 0 ? Object.keys(tableItem[0]?.body || {}).length : 0;

  const objBody = [];
  for (let i = 1; i <= bodyContent; i++) {
    const contentDetails =
      tableItem && tableItem.length > 0 ? tableItem[0]?.body[`content${i}`]?.details || {} : {};
    objBody.push(...Object.keys(contentDetails));
  }

  return (
    <Table className={scroll && scroll ? 'table-scroll' : ''}>
      <table>
        <colgroup>
          {objHeader.map((item, index) => (
            <col
              key={index}
              width={
                tableItem && tableItem[0]?.header[item]?.col
                  ? tableItem[0].header[item].col
                  : 'auto'
              }
            />
          ))}
        </colgroup>
        <thead>
          <tr>
            {objHeader.map((item, index) => (
              <th
                key={index}
                className={
                  tableItem && tableItem[0]?.header[item]?.align
                    ? tableItem[0].header[item].align
                    : ''
                }
              >
                {tableItem && tableItem[0]?.header[item]?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {objBody.length > 0 ? (
            Object.entries((tableItem && tableItem[0]?.body) || {}).map(
              ([contentKey, content], contentIndex) => (
                <tr key={contentIndex}>
                  {Object.entries(content?.details || {}).map(([detailKey, detail], cellIndex) => (
                    <td key={cellIndex} className={detail && detail.align ? detail.align : ''}>
                      {detail && detail.txt}
                    </td>
                  ))}
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={objHeader.length}>
                <div
                  style={{
                    height: '300rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  데이터가 없습니다.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Table>
  );
}

export default TableWrap;
