import * as React from "react";
import {Helmet} from "react-helmet";

const MetaTags = () => {
    return (
        <Helmet>
            <meta property="og:title" content="Obligain" />
            <meta property="og:image" content="http://www.edu.k-org.pl/obligain.png" />
            <meta property="og:description" content="Pierwszy w Polsce portal z najlepszymi okazjami inwestycyjnymi w jednym miejscu."/>
        </Helmet>
    );
  };

export default MetaTags;
