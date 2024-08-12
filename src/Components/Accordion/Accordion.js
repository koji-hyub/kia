import React, { useEffect, useRef, useState } from 'react';

import Style from './AccordionStyle';
import { IconArrowType01 } from '../../assets/images/common/IconSet';

const Accordion = Style(APP_SKIN);

function SubHeaderWrap({ setAcc }) {
  return (
    <Accordion>
      <div className="inner">
        {setAcc.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </Accordion>
  );
}

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const accordionHandler = (e) => {
    const _this = e.currentTarget;
    const openClosed = _this.closest('.inner').querySelectorAll('.accordion-item');

    openClosed.forEach((item, index) => {
      const title = item.querySelector('.accordion-title');
      if (title.classList.contains('isActive') && title === _this) {
        title.classList.remove('isActive');
        setIsOpen(false);
      } else if (title !== _this) {
        title.classList.remove('isActive');
      } else {
        title.classList.add('isActive');
        setIsOpen(true);
      }
    });
  };

  return (
    <div className="accordion-item">
      <div className={`accordion-title ${isOpen ? 'isActive' : ''}`} onClick={accordionHandler}>
        <p className={'tit'}>{title}</p>
        <IconArrowType01 />
      </div>
      {isOpen && (
        <div className="accordion-content">
          <div className="inner">{content}</div>
        </div>
      )}
    </div>
  );
}

export default SubHeaderWrap;
