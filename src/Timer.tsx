import { Button, Card } from 'antd';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import AppState from './store';

@observer
export default class TimerView extends React.Component<{appState: AppState}, {}> {
    private des:string = 'click';

    public render() {
        return (
            <div className='timer_content'>
                <Button type='primary' onClick={this.onReset}>
                    {this.des}: {this.props.appState.timer}
                </Button>
                <Card title='user'>
                    <ul>
                        { this.renderUser() }
                    </ul>
                </Card>
                <DevTools />
            </div>
        );
     }

    public renderUser() {
        return this.props.appState.unusers.map(user => {
            return <li key={user.id}>{ user.name }</li>
        });
     }

    public onReset = () => {
         this.props.appState.resetTimer();
     }
};