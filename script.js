TweenMax.staggerTo(".slice", 1, {opacity:1, repeat:1000}, 0.1);

let mn = gsap.matchMedia();

mn.add("(min-width : 500px)",() => {

    let t1 = gsap.timeline({scrollTrigger : {
        trigger : ".page2",
        start: "0% 95%",
        end: "30% 50%",
        scrub : 1
    }
    });
    
    t1.to("#fanta", {
        top: "120%",
        left: "4%"
    },"#leaf2")
    
    t1.to("#leaf2", {
        top: "120%",
        left: "4%",
        rotate :"80deg"
    },"#leaf2")
    
    t1.to("#orange", {
        top: "160%",
        right: "4%",
    },"#leaf2")
    
    t1.to("#leaf3", {
        top: "100%",
        right: "40%",
        rotate : "70deg"
    },"#leaf2")
    
    t1.to("#halforange", {
        top: "160%",
        left: "25%",
    },"#leaf2")
    
    t2 = gsap.timeline({scrollTrigger : {
        trigger : ".page3",
        start: "0% 95%",
        end: "20% 50%",
        scrub : 1
    }
    });
    
    t2.to("#fanta", {
        top: "215%",
        left: "30%",
    },"#halforange")
    
    t2.to("#halforange", {
        scale : 1.6,
        top: "210%",
        left: "43%",
    },"#halforange")
    
    t2.to("#pepsi", {
        rotate :"0deg"
    },"#halforange")
    
    t2.to("#cocacola", {
        rotate : "0deg"
    },"#halforange")
})

let mm = gsap.matchMedia();

mm.add("(max-width : 500px)",() => {

    let t3 = gsap.timeline({scrollTrigger : {
        trigger : ".page2",
        start: "0% 95%",
        end: "30% 50%",
        scrub : 1
    }
    });
    
    t3.to("#fanta", {
        top: "105%",
        left: "-20%",
        scale : "0.7"
    },"#leaf2")
    
    t3.to("#leaf2", {
        top: "120%",
        left: "4%",
        rotate :"250deg"
    },"#leaf2")
    
    t3.to("#orange", {
        top: "154%",
        right: "-10%",
        scale : 0.3
    },"#leaf2")
    
    t3.to("#halforange", {
        top: "130%",
        left: "35%",
    },"#leaf2")

    t4 = gsap.timeline({scrollTrigger : {
        trigger : ".page3",
        start: "0% 95%",
        end: "20% 50%",
        scrub : 1
    }
    });

    t4.to("#fanta", {
        top: "237%",
        left: "5%",
        scale : "0.55"
    },"#halforange")
    
    t4.to("#halforange", {
        scale : 1.6,
        top: "240%",
        left: "47%",
        scale : "0.77"
    },"#halforange")
    
    t4.to("#pepsi", {
        rotate :"0deg"
    },"#halforange")
    
    t4.to("#cocacola", {
        rotate : "0deg"
    },"#halforange")
})

