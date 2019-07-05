import React from 'react';
import ReactDOM from 'react-dom';

import faker from "faker";

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Sam'
                    timeAgo='Today at 11:45PM'
                    avatarImg={faker.image.avatar()}
                    content={faker.company.companyName()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Alex'
                    timeAgo='Today at 5:25PM'
                    avatarImg={faker.image.avatar()}
                    content={faker.company.companyName()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Jane'
                    timeAgo='Yesterday at 10:34PM'
                    avatarImg={faker.image.avatar()}
                    content={faker.company.companyName()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Frank'
                    timeAgo='Yesterday at 7:15PM'
                    avatarImg={faker.image.avatar()}
                    content={faker.company.companyName()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Mac'
                    timeAgo='Yesterday at 9:23AM'
                    avatarImg={faker.image.avatar()}
                    content={faker.company.companyName()}
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));