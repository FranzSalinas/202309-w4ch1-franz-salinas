import { GentlemanType } from '../../models/type';
import { useState } from 'react';

type Props = {
  gentleman: GentlemanType[];
};

export function Gentleman({ gentleman }: Props) {
  const [gentlemansList, setGentlemansList] = useState(gentleman);
  const handleDeleteClick = (id: number) => {
    const updatedList = gentlemansList.filter(
      (gentleman: GentlemanType) => gentleman.id !== id
    );
    setGentlemansList(updatedList);
  };

  return (
    <main className="main">
      <ul className="gentlemen">
        {gentlemansList.map((item) => (
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src={item.picture}
                alt={item.alternativeText}
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">{item.name}</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  {item.profession}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span>{' '}
                  {item.status}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{' '}
                  {item.twitter}
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i
              role="button"
              className="icon gentlemanicon gentlemanicon--delete fas fa-times"
              onClick={() => handleDeleteClick(item.id)}
            ></i>
            ;
          </li>
        ))}
      </ul>
    </main>
  );
}
