import router from '@system.router';
export default {
    data: {
        title: "",
        number: 1
    },
    onInit() {
        //        this.title = "Hello World"
    },
    page1: function(){
        router.push({
            uri:"pages/index/index"
        })
    },
    increment: function(){
        this.number++;
    },
    decrement: function(){
        this.number--;
    }
}
