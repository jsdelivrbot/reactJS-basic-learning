import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('comment box test', () => {
    let component;

    //run before any statement
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the commentBox class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('it has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text ', () => {

        beforeEach(() => {
            //the change event carry the "new comment" value
            //means to change event occur with the value 'new comment' (shows new comment on the textarea)
            component.find('textarea').simulate('change', 'new comment');

        });

        it('shows text that is enter', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('When submitted clear the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });

});

