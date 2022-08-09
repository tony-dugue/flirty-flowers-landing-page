import {useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss'

const useLocoScroll = (start) => {

  useEffect( () => {
    if (!start) return

    const scrollEl = document.querySelector('#main-container')

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal'
    })

  }, [start])
}

export default useLocoScroll
