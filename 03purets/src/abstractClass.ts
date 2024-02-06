abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 8
    }
}

// this is NOT allowed
// const ds = new TakePhoto("test", "Test")

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}

const ds = new Instagram("", "", 8)