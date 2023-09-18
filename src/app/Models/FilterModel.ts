export class FilterMode{
    price: number = 0;
    displayName: string = '';
    duration : number = 0;
    provider: string = '';

    constructor(price: number, displayName: string, duration: number, provider: string) {
        this.displayName = displayName;
        this.duration = duration;
        this.price = price;
        this.provider = provider;
    }
}