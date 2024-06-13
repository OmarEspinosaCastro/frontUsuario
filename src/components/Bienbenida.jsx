import React, { useEffect } from 'react'
import Menu from './Menu';

const Bienbenida = () => {

    return (
        <div>
            <Menu />
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <div class="jumbotron">
                                <h1 class="display-4">Hello, world!</h1>
                                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>

                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p class="lead">
                                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Administración de Usuarios</h1>
                        <p class="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                        <p class="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bienbenida