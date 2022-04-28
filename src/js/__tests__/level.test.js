import getLevel from '../level';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should error', () => {
  fetchData.mockReturnValue({ status: 'not ok' });
  const response = getLevel(1);
  expect(response).toEqual('Информация об уровне временно недоступна');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should call level heroes', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 100 });
  const response = getLevel(1);
  expect(response).toEqual('Ваш текущий уровень: 100');
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
