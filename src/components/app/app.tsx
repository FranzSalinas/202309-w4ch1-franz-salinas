import { Gentleman } from '../cards/gentleman';
import { Info } from '../info/info';
import '../styles.scss/style.css';
import { gentleman } from '../../data/repo';

export function App() {
  const title = 'The pointing gentlemen';
  const subtitle = 'gentlemen pointing at you';

  return (
    <div>
      <Info title={title} subtitle={subtitle}></Info>
      <Gentleman gentleman={gentleman}></Gentleman>
    </div>
  );
}
