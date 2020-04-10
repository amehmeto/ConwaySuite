import {Conway} from './conway'

describe('Conway Suite Test Suite', () => {
    it.each([
        [1, "1\n", "1\n1 1\n"],
        [1, "2\n", "2\n1 2\n"],
        [1, "1 1\n", "1 1\n2 1\n"],
        [1, "2 2\n", "2 2\n2 2\n"],
        [1, "2 1\n", "2 1\n1 2 1 1\n"],
        [1, "3 1\n", "3 1\n1 3 1 1\n"],
        [1, "3 3 1\n", "3 3 1\n2 3 1 1\n"],
        [1, "3 3 3 1\n", "3 3 3 1\n3 3 1 1\n"],
        [1, "3 3 3 1\n", "3 3 3 1\n3 3 1 1\n"],
        [1, "2 3 3 1\n", "2 3 3 1\n1 2 2 3 1 1\n"],
        [3, "1\n", "1\n1 1\n2 1\n1 2 1 1\n"],
        [4, "2\n", "2\n1 2\n1 1 1 2\n3 1 1 2\n1 3 2 1 1 2\n"],
        [2, "2 2\n", "2 2\n2 2\n2 2\n"],
    ])('should generate one line', (deep: number, source: string, suite: string) => {
        expect(new Conway().suite(deep, source)).toStrictEqual(suite)
    })
})