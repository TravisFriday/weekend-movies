import React, { Component } from "react";

const Routes= () => {
<Switch>
<Route exact path="/" component={Home} />
<Route path="/liked" component={Liked} />
<Route component={Home} />
</Switch>
}

export default Main;
