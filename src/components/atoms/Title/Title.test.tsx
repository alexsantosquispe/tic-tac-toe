import { render } from '@testing-library/react';
import { Title } from './Title';

describe('Title', () => {
  it('should render the title', () => {
    const component = render(<Title />);

    expect(component).toMatchSnapshot();
  });
});
