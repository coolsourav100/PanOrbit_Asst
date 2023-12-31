import React from 'react'

const Messages = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }} className='chat_box'>
        <div classname="container py-5">
          <div classname="row d-flex justify-content-center">
            <div classname="col-md-10 col-lg-8 col-xl-6">
              <div classname="card message" id="chat2">

                <div
                  classname="card-body"
                  data-mdb-perfect-scrollbar="true"
                  style={{ position: "relative", height: 400 }}
                >
                  <div classname="d-flex justify-content-start">
                    {/* messages*/}
                    <div className='msg-bx-info'>
                      <p
                        classname="small p-2 ms-3 mb-1 rounded-3 msg_bx"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Hi
                      </p>
                      <p
                        classname="small p-2 ms-3 mb-1 rounded-3 msg_bx"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        How are you ...???
                      </p>
                      <p
                        classname="small p-2 ms-3 mb-1 rounded-3 msg_bx"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        What are you doing tomorrow? Can we come up a bar?
                      </p>
                      <h4 classname="small ms-3 mb-3 rounded-3 text-muted">23:58</h4>
                    </div>
                  </div>

                  <div classname="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div className='msg-bx-info'>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary msg_bx">
                        Hiii, I'm good.
                      </p>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary msg_bx">
                        How are you doing?
                      </p>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary msg_bx">
                        Long time no see! Tomorrow office. will be free on sunday.
                      </p>
                      <p classname="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end msg_bx">
                        00:06
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                  </div>
                  <div classname="d-flex flex-row justify-content-start mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                    <div>
                      <p
                        classname="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Okay
                      </p>
                      <p
                        classname="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        We will go on Sunday?
                      </p>
                      <p classname="small ms-3 mb-3 rounded-3 text-muted">00:07</p>
                    </div>
                  </div>
                  <div classname="d-flex flex-row justify-content-end mb-4">
                    <div>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        That's awesome!
                      </p>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        I will meet you Sandon Square sharp at 10 AM
                      </p>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Is that okay?
                      </p>
                      <p classname="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                        00:09
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                  </div>
                  <div classname="d-flex flex-row justify-content-start mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                    <div>
                      <p
                        classname="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Okay i will meet you on Sandon Square
                      </p>
                      <p classname="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                    </div>
                  </div>
                  <div classname="d-flex flex-row justify-content-end mb-4">
                    <div>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Do you have pictures of Matley Marriage?
                      </p>
                      <p classname="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                        00:11
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                  </div>
                  <div classname="d-flex flex-row justify-content-start mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                    <div>
                      <p
                        classname="small p-2 ms-3 mb-1 rounded-3"
                        style={{ backgroundColor: "#f5f6f7" }}
                      >
                        Sorry I don't have. i changed my phone.
                      </p>
                      <p classname="small ms-3 mb-3 rounded-3 text-muted">00:13</p>
                    </div>
                  </div>
                  <div classname="d-flex flex-row justify-content-end">
                    <div>
                      <p classname="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                        Okay then see you on sunday!!
                      </p>
                      <p classname="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                        00:15
                      </p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                      alt="avatar 1"
                      style={{ width: 45, height: "100%" }}
                    />
                  </div>
                </div>
                <div classname="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="avatar 3"
                    style={{ width: 40, height: "100%" }}
                  />
                  <input
                    type="text"
                    classname="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="Type message"
                  />
                  <a classname="ms-1 text-muted" href="#!">
                    <i classname="fas fa-paperclip" />
                  </a>
                  <a classname="ms-3 text-muted" href="#!">
                    <i classname="fas fa-smile" />
                  </a>
                  <a classname="ms-3" href="#!">
                    <i classname="fas fa-paper-plane" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Messages