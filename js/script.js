function sendToWhatsApp(){let e=document.getElementById("name").value.trim(),t=document.getElementById("phone").value.trim(),r=document.getElementById("details").value.trim(),a=`*طلب حجز خدمة قهوة عربية:*

*الاسم:* ${e}
*رقم الجوال:* ${t}
*تفاصيل المناسبة:* ${r}`,n=`https://wa.me/966507712688?text=${encodeURIComponent(a)}`,s=document.getElementById("whatsapp-toast");s.classList.remove("hidden"),setTimeout(()=>{s.classList.add("hidden"),window.open(n,"_blank")},3e3)}document.querySelectorAll(".gallery-image-container").forEach(e=>{e.addEventListener("click",function(){let e=this.querySelector(".gallery-image"),t=document.createElement("div");t.style.cssText=`
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.9);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                `;let r=document.createElement("img");r.src=e.src,r.style.cssText=`
                    max-width: 90%;
                    max-height: 90%;
                    border-radius: 15px;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
                `,t.appendChild(r),document.body.appendChild(t),t.addEventListener("click",()=>{document.body.removeChild(t)})})}),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=document.querySelector(this.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const observerOptions={threshold:.1,rootMargin:"0px 0px -100px 0px"},observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.style.opacity="1",e.target.style.transform="translateY(0)",e.target.classList.add("animate-in"))})},observerOptions);document.querySelectorAll(".service-card, .testimonial-card, .gallery-image-container, .feature-card").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(50px)",e.style.transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",observer.observe(e)}),window.addEventListener("load",()=>{document.body.classList.add("loaded")}),"ontouchstart"in window&&document.querySelectorAll(".hover-lift, .testimonial-card, .gallery-image-container").forEach(e=>{e.addEventListener("touchstart",function(){this.style.transform="translateY(-5px) scale(1.02)"}),e.addEventListener("touchend",function(){this.style.transform=""})});
