import React, { useState } from 'react';

const Dropdown = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const accordionData = [
    {
      id: 1,
      title: 'item 1',
      content: "lorem",
    },
    {
      id: 2,
      title: 'item 2',
      content: "lorem",
    },
    {
      id: 3,
      title: 'item 3',
      content: 'lorem',
    },
    {
      id: 4,
      title: 'item 4',
      content: 'lorem',
    },
  ];

  return (
    <div className="accordion-container">
      {accordionData.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${open === item.id ? 'open' : ''}`}
        >
          <div
            className="accordion-header"
            onClick={() => toggle(item.id)}
          >
            <h3>{item.title}</h3>
            <span>{open === item.id ? '-' : '+'}</span>
          </div>
          {open === item.id && <div className="accordion-body">{item.content}</div>}
          <hr className="divider" />
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
