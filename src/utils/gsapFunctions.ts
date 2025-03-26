import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin);

export function animateTyping(target: string, text: string, duration: number) {
    gsap.to(target, {
      text: text,
      duration: duration,
      ease: 'power1.inOut',
    });

    return () => gsap.killTweensOf(target)
};

type to = {
    x?: number,
    y?: number,
    duration: number,
    ease: string,
    opacity: number,
}

type from = {
    x?: number,
    y?: number,
    opacity: number,
    stagger: number
}

type SlideDirection = 'right' | 'left' | 'up' | 'down'

export function animateSlideIn(target: any, direction: SlideDirection) {
    let from: from = { opacity: 0.5, stagger: 0.1 }
    let to: to = { x: 0, y: 0, duration: 1.5, ease: "power3.out", opacity: 1 }

    switch (direction) {
        case 'left':
            from.x = 50
            break
        case 'right':
            from.x = -50
            break
        case 'down':
            from.y = -50
            break
        case 'up':
            from.y = 50
            break
        default:
            from.x = -50
            break
    }

    gsap.fromTo(target, from, to)

    return () => gsap.killTweensOf(target)
}