import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  configurable: true,
  value: jest.fn().mockImplementation(() => Promise.resolve())
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'load', {
  configurable: true,
  value: jest.fn()
});
