import { expect } from '../test_helper';
import CommentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comment Reducer', () => {
    it('handles action with unknown type', () => {
        expect(CommentReducer(undefined, {})).to.be.instanceOf(Array);
        expect(CommentReducer(undefined, {})).to.eql([]);
    });

    it('handle action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: '3' };
        expect(CommentReducer([], action)).to.eql(['3']);
    });
})
