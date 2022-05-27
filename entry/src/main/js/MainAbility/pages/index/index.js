import router from '@system.router';
export default {
    data: {
        title: "",
        imgSrc1:"common/logo.png",
        imgSrc2:"common/profilePic.png",
        imgSrc3:"common/shoe_general.png",
        imgSrc4:"common/shoe1.jpg",
        imgSrc5:"common/shoe2.jpg",
        filter: "common/filter.png"
    },
    onInit() {
        //        this.title = this.$t('strings.world');
        this.title = "Discover our new items.";
        var img1 = new Image();
        img1.src = this.imgSrc1;

        var img2 = new Image();
        img2.src = this.imgSrc2;

        var img3 = new Image();
        img3.src = this.imgSrc3;

        var img4 = new Image();
        img4.src = this.imgSrc4;

        var img5 = new Image();
        img5.src = this.imgSrc5;

//                img.onload = function (){
//                    console.info('image loading is done');
//                };
//                img.onerror = function (){
//                console.info('image loading failed');
//            };
    },
    page3: function(){
        router.push({
            uri:"pages/index3/index3"
        })
    },
    page2: function(){
        router.push({
            uri:"pages/index2/index2"
        })
    },
    page2_1: function(){
        router.push({
            uri:"pages/index2_1/index2_1"
        })
    },

}



