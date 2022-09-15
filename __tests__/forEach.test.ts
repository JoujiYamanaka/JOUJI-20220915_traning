import { forEach } from '../src/forEach';

// test('forEachが正しくコールバックすること', () => {
//     const mockCallback = jest.fn((x) => 42 + x);
//     forEach([0, 1], mockCallback);

//     // 実行回数
//     expect(mockCallback.mock.calls.length).toBe(2);

//     // 1回目実行時の第1引数
//     expect(mockCallback.mock.calls[0][0]).toBe(0);

//     // 2回目実行時の第1引数
//     expect(mockCallback.mock.calls[1][0]).toBe(1);

//     // 1回目実行時の戻り値
//     expect(mockCallback.mock.results[0].value).toBe(42);

//     // 2回目実行時の戻り値
//     expect(mockCallback.mock.results[1].value).toBe(43);
// });

// test('戻り値の変更', () => {
//     const myMock = jest.fn();
//     myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

//     expect(myMock()).toBe(10);
//     expect(myMock()).toBe('x');
//     expect(myMock()).toBe(true);
//     expect(myMock()).toBe(true);
// });

// test('spyon test', () => {
//     const video = {
//         play() {
//             return true;
//         },
//     };

//     // playメソッドの戻り値を変更する。
//     const spy = jest.spyOn(video, 'play').mockReturnValue(false);
//     expect(video.play()).toBe(false);

//     // mockRestoreを実行すると解除される。
//     spy.mockRestore();
//     expect(video.play()).toBe(true);
// });

// const audio = {
//     _volume: 0,
//     set volume(value) {
//         this._volume = value;
//     },
//     get volume() {
//         return this._volume;
//     },
// };

// test('volume getter test', () => {
//     const spy = jest.spyOn(audio, 'volume', 'get').mockReturnValue(100);
//     try {
//         expect(audio.volume).toBe(100);
//         expect(spy).toHaveBeenCalled();
//     } finally {
//         // エラーが発生しても解除されるようにfinallyで実行すること
//         spy.mockRestore();
//     }
// });

// test('volume setter test', () => {
//     const spy = jest.spyOn(audio, 'volume', 'set');
//     try {
//         audio.volume = 25;
//         expect(spy).toHaveBeenCalled();
//         expect(spy.mock.calls[0][0]).toBe(25);
//     } finally {
//         // エラーが発生しても解除されるようにfinallyで実行すること
//         spy.mockRestore();
//     }
// });

test('振る舞いの変更', () => {
    const myMock = jest.fn();
    myMock.mockImplementation((arg: string) => {
        switch (arg) {
            case 'hoge':
                return 1;
            case 'fuga':
                return 2;
            default:
                return 0;
        }
    });

    expect(myMock('hoge')).toBe(1);
    expect(myMock('fuga')).toBe(2);
    expect(myMock('moge')).toBe(0);
});
