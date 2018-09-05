
import {computed, observable} from 'mobx';

export default class AppState {
    @observable public timer = 0;
    @observable public users = [{ id: 0, name: 'jim' }, { id: 1, name: 'wade' }];

    public resetTimer() {
        this.timer += 1;
    }

    @computed get unusers() {
        return this.users.filter(o => o.id === 0);
    }
}