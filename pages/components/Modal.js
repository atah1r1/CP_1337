export default function Modal({ ModalButtonRef }) {
    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">You registred successfully</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src="/female.png" width="300px"></img>
                            <p style={{fontSize: '25px'}} className="text-center">You will receive an email with the details of the competition and the tean members</p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button" ref={ModalButtonRef} hidden>Open first modal</a>
        </>
    )
}