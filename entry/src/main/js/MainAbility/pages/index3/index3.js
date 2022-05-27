import router from '@system.router';
export default {
    data: {
        title: "",
        gender:"",
        category:"",
        brand:"",
        price: "",
        size: "",
        value: 0,
        startValue: 0,
        currentValue: 0,
        endValue: 0,
        myStyle: "#fff1f0f0",
    },
    setValue(e) {
        if (e.mode == "start") {
            this.value = e.value;
            this.startValue = e.value;
        } else if (e.mode == "move") {
            this.value = e.value;
            this.currentValue = e.value;
        } else if (e.mode == "end") {
            this.value = e.value;
            this.endValue = e.value;
        }
    },

    onInit() {
        this.title = "Filter"
        this.gender="Gender"
        this.category="Category"
        this.brand="Brand"
        this.price="Price"
        this.size="Size"
    },
    page1: function(){
        router.push({
            uri:"pages/index/index"
        })
    },
//    change:function(){
//       this.myStyle="blue";
//    }

}
