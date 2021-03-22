import React from 'react';

export const InvoiceModal = () => {
    return (
        <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
            <i style={{ fontSize:'22px', cursor: 'pointer' }} className="fa fa-eye"></i>
        </button>
        {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Invoice review</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Get Pdf</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
