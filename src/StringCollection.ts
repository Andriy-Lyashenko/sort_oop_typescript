export class StringCollection {
    constructor(public data: string){};

    get length(): number{
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
        )
    };

    swap(leftIndex: number, rightIndex: number){
        const characters = this.data.split('')
        const buff = this.data[leftIndex];
        characters[leftIndex] = this.data[rightIndex]
        characters[rightIndex] = buff

        this.data = characters.join('')
    }
}
