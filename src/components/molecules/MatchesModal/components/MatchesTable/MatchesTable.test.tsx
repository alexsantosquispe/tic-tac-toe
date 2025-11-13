import { render } from '@testing-library/react';
import { matchesDataMock } from '../../../../../tests/mockTest';
import { I18NWrapper } from '../../../../../tests/testsUtils';
import { MatchesTable } from './MatchesTable';

describe('MatchesTable', () => {
  it('should render the table with data', () => {
    const component = render(
      <I18NWrapper>
        <MatchesTable data={matchesDataMock} />
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();
  });

  it('should render the empty table', () => {
    const component = render(
      <I18NWrapper>
        <MatchesTable data={[]} />
      </I18NWrapper>
    );

    expect(component).toMatchSnapshot();
  });
});
