
export class LoadingHandler{

    private timeout:any;
    isLoading =  false;

    start(){
        this.timeout = setTimeout(() => {
            this.isLoading = true;
        }, 5000);
    }

    finish(){
        this.isLoading = true;
        clearTimeout(this.timeout);
    }
}
