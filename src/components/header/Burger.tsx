import React from "react";

function Burger({ active, setActive }: {active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  return (
    <div className={ active ? 'nav-burger active-burger' : 'nav-burger'} onClick={() => setActive(!active)}>
      <span className='nav-burger-span' />
    </div>
  );
}

export default Burger;
