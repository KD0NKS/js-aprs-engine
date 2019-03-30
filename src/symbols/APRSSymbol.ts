export default class APRSSymbol {
    public constructor(init?: Partial<APRSSymbol>) {
        Object.assign(this, init);
    }

    public key: string;
    public value: string;
    public name: string;
}