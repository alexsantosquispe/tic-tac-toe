import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Cell } from './Cell';

describe('Cell', () => {
  it('should render a header cell', () => {
    const { getByText } = render(
      <table>
        <thead>
          <tr>
            <Cell value="Header" isHeader />
          </tr>
        </thead>
      </table>
    );
    expect(getByText('Header')).toBeInTheDocument();
  });

  it('should render a data cell', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <tr>
            <Cell value="Data" />
          </tr>
        </tbody>
      </table>
    );
    expect(getByText('Data')).toBeInTheDocument();
  });
});
