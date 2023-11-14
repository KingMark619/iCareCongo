import React from 'react'

const Bill = () => {
  return (
    <section className="vh-100" style="background-color: #35558a;">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100 text-center">
      <div className="col">
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-light btn-lg" data-mdb-toggle="modal"
          data-mdb-target="#exampleModal">
          <i className="fas fa-info me-2"></i> Get information
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-start text-black p-4">
                <h5 className="modal-title text-uppercase mb-5" id="exampleModalLabel">Johnatan Miller</h5>
                <h4 className="mb-5" style="color: #35558a;">Thanks for your order</h4>
                <p className="mb-0" style="color: #35558a;">Payment summary</p>
                {/* <hr className="mt-2 mb-4"
                  style="height: 0; background-color: transparent; opacity: .75; border-top: 2px dashed #9e9e9e;"/> */}

                <div className="d-flex justify-content-between">
                  <p className="fw-bold mb-0">Ether Chair(Qty:1)</p>
                  <p className="text-muted mb-0">$1750.00</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="small mb-0">Shipping</p>
                  <p className="small mb-0">$175.00</p>
                </div>

                <div className="d-flex justify-content-between pb-1">
                  <p className="small">Tax</p>
                  <p className="small">$200.00</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Total</p>
                  <p className="fw-bold" style="color: #35558a;">$2125.00</p>
                </div>

              </div>
              <div className="modal-footer d-flex justify-content-center border-top-0 py-4">
                <button type="button" className="btn btn-primary btn-lg mb-1" style="background-color: #35558a;">
                  Track your order
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  )
}

export default Bill