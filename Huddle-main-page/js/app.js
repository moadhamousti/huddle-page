// TO THE TOP BUTTON 

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" , () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
})


// SMOOTH SCROLLING 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.landing', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.landing',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsR = gsap.utils.toArray('.article .image')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}




TweenMax.from(".landing", 1, {
	opacity: 0,
	delay: 0,
	y: 20,
	ease: Expo.easeInOut
})


TweenMax.from("#image-main", 1, {
	opacity: 0,
	delay: 0,
	y: 20,
	ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
	opacity: 0,
	x: -20,
	ease: Expo.easeInOut
})

TweenMax.from(".nav-button", 1, {
	opacity: 0,
	x: 30,
	ease: Expo.easeInOut
})


