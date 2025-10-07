import { renderHook } from '@testing-library/react';
import ThemeProvider from '../context/ThemeProvider';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  it('should throw an error message if the hook is not wrapped in ThemeProvider', () => {
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be wrapped in a ThemeProvider'
    );
  });

  it('should return the theme context when wrapped in ThemeProvider', () => {
    const mockContextValue = {
      theme: 'system',
      setTheme: jest.fn()
    };

    const { result } = renderHook(() => useTheme(), { wrapper: ThemeProvider });

    expect(result.current.theme).toBe(mockContextValue.theme);
    expect(typeof result.current.setTheme).toBe('function');
  });
});
