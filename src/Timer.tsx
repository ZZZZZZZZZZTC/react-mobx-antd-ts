import { Button, Card, Tag } from 'antd';
import {action, observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import AppState from './store';

@observer
export default class TimerView extends React.Component<{appState: AppState}, {}> {
    private todo:string = 'click';
    @observable
    private id: number = 0;

    public render() {
        return (
            <div className='timer_content'>
                <Button type='primary' onClick={this.onReset}>
                    {this.todo}: {this.props.appState.timer}
                </Button>
                <Card title='user'>
                    <ul>
                        { this.renderUser() }
                    </ul>
                </Card>
                <Tag color="magenta">{this.id}</Tag>
                <Button onClick={this.changeId}>add id.</Button>
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

    @action
    public changeId = () => {
        this.id += 1;
    }
};