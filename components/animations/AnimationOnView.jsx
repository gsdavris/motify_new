/* eslint-disable linebreak-style */
import { useEffect, useState, Fragment } from "react";
import { Transition } from "@headlessui/react";

const AnimationOnView = ({ idValue, children, ...props }) => {
  const [show, setShow] = useState(false);

  // When the user reach the element, start the animation
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById(idValue);
      const time =
        element && window.innerHeight >= element.getBoundingClientRect().top;
      if (time) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    if ("undefined" !== typeof window) {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [idValue]);

  return (
    <div id={idValue}>
      <Transition appear={true} as={Fragment} show={show} {...props}>
        {children}
      </Transition>
    </div>
  );
};

export default AnimationOnView;
