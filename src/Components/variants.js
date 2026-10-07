const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? "-70%" : direction === "right" ? "70%" : "0%",
        y: direction === "top" ? "-70%" : direction === "bottom" ? "70%" : "0%",
      },
      visible: {
        opacity: 1,
        x: "0%",
        y: "0%",
        transition: {
          type: 'tween',
          duration: 0.9,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75], 
        },
      },
    };
  };
  
  export default fadeIn;