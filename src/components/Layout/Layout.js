import React from 'react';

import Aux from '../../hoc1/Aux1';

const layout = (props) => (
   <Aux>
      <div>Tooolbar, SideDrawer, Backdrop</div>
      <main>
         {props.children}
      </main>
   </Aux>
);

export default layout;