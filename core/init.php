<?php

/*
 * load site controllers
 */
function makeView($controller, $view) {
    /*
     * explode classname and method
     */
    $ctr = explode("@", $controller, 2);

    require_once "/../http/Controllers/Controller.php";
    require_once "/../http/Controllers/" .$ctr[0]. ".php";

    $data = $d::{$ctr[1]}();

    /*
    * render views
    */
    $v = 'views/'.$view.'.twig';
    Timber::render( $v, $data );
}

/*
 * custom routes
 */
require_once(__DIR__ . '/../routes/custom.php');