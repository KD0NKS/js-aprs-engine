import { IObservable } from "./IObservable";
import { IObserver } from './IObserver';
import { injectable } from "inversify";

@injectable()
export abstract class AbstractObservable implements IObservable {
    private _observers: IObserver[] = [];

    // TODO: Should be able to pass a function here and use it as a sort of callback.
    public RegisterObserver(observer: IObserver) {
        this._observers.push(observer);
    }

    public RemoveObserver(observer: IObserver) {
        for(let i = 0; i < this._observers.length; i++) {
            if(this._observers[i] === observer) {
                this._observers.splice(i, 1);
            }
        }
    }

    NotifyObservers() {
        this._observers.map(x => x.ChangeEvent())
    }
}