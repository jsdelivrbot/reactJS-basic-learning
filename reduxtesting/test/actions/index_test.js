import { expect } from '../test_helper';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('action test', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('3');
            expect(action.payload).to.equal('3');
        });
    });
});