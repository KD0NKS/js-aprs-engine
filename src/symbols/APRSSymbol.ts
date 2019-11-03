export class APRSSymbol {
    public constructor(init?: Partial<APRSSymbol>) {
        Object.assign(this, init);
    }

    public name: string;
    public key: string;
    public value: string;
    public isAllowOverlay: boolean = false;
}