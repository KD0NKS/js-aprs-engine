import { IObserver } from "./IObserver";

export interface IObservable {
    RegisterObserver(Observer: IObserver): void;
    RemoveObserver(Observer: IObserver): void;
    NotifyObservers(prop: string, value: any): void;
}