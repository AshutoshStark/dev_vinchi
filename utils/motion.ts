
export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  export const slideInFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };
  export const spawnFromDepth = {
    hidden: { z: -100, scale: 0 },
    visible: {
      z: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  export const moveToRight ={

    hidden:{x:0,y:0,opacity:1},
    visible:{
      y:-5,
      x:3,
      opacity:1,
      transition:{
        delay:0.1,
        duration:0.5,
        type: "spring", 
        stiffness: 400, 
        damping: 17,
       }
      }
    }