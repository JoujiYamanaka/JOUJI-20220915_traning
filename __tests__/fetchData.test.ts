import { fetchData } from '../src/fetchData';

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch((e) => expect(e).toMatch('error'));
});
