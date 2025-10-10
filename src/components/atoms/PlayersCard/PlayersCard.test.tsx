import { render } from '@testing-library/react';
import PlayersCard from './PlayersCard';

describe('PlayersCard', () => {
  it('should render the component correctly', () => {
    let component = render(<PlayersCard />);

    expect(component).toMatchSnapshot();

    component = render(<PlayersCard isSinglePlayer={false} />);

    expect(component).toMatchSnapshot();
  });
});
